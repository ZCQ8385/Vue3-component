import { createNamespace } from '@zi-shui/utils/create'
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export default defineComponent({
  name: 'ZVirtualList',
  props: {
    size: {
      type: Number,
      default: 35
    },
    remain: {
      default: 8,
      type: Number
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { slots }) {
    const bem = createNamespace('vl')
    const wrapperRef = ref<HTMLElement | null>()
    const barRef = ref<HTMLElement | null>()
    const state = reactive({
      // 滚动条的高度
      start: 0,
      end: props.remain
    })
    const prev = computed(() => {
      return Math.min(state.start, props.remain)
    })
    const next = computed(() => {
      return Math.min(props.remain, props.items.length - state.end)
    })
    // 应展示上8条和下8条数据,保证用户在滚动的时候不会看到空白
    const visibleData = computed(() => {
      return props.items.slice(state.start - prev.value, state.end + next.value)
    })

    const offset = ref(0)

    const handleScroll = () => {
      //根据滚动条的距离计算过去了几个数据
      const scrollTop = wrapperRef.value!.scrollTop
      //划过了多少个数据
      state.start = Math.floor(scrollTop / props.size)

      state.end = state.start + props.remain
      offset.value = state.start * props.size - props.size * prev.value
    }
    watch(
      () => props.items,
      () => {
        // 重新计算滚动条的高度
        wrapperRef.value!.style.height = props.remain * props.size + 'px'
        barRef.value!.style.height = props.items.length * props.size + 'px'
      }
    )
    onMounted(() => {
      //设置容器的高度
      wrapperRef.value!.style.height = props.remain * props.size + 'px'
      // 设置滚动条的高度
      barRef.value!.style.height = props.items.length * props.size + 'px'
    })
    return () => {
      return (
        <div class={bem.b()} ref={wrapperRef} onScroll={handleScroll}>
          {/* 模拟总长度,感觉会有很多数据 */}
          <div class={bem.e('scroll-bar')} ref={barRef}></div>
          {/* 更新列表从哪显示到哪,一直更新数据 */}
          <div
            class={bem.e('scroll-list')}
            style={{ transform: `translate3d(0,${offset.value}px,0)` }}
          >
            {visibleData.value.map((node, index) => slots.default!({ node }))}
          </div>
        </div>
      )
    }
  }
})
