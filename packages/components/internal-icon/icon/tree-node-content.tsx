import { computed, defineComponent, inject } from 'vue'
import { treeNodeContentProps, treeTnjectKey } from '../../tree/src/tree'

export default defineComponent({
  name: 'TreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const treeContext = inject(treeTnjectKey)
    const node = computed(() => props.node)
    return () => {
      return treeContext?.slots.default
        ? treeContext?.slots.default({ node: node.value })
        : node.value.label
    }
  }
})
