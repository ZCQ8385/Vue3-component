// block 代码块 element 元素 modifier 修饰符 state 状态
// z-button
// z-button_element
// z-button_element--disabled
// is-checked is-enabled

// :class=[bem.b()]

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix: string = '', element: string = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string = '', modifier: string = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element: string = '', modifier: string = '') =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    blockSuffix: string = '',
    element: string = '',
    modifier: string = ''
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : ''
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

export function createNamespace(name: string) {
  const prefixName = `z-${name}`
  return createBEM(prefixName)
}

const bem = createNamespace('button')

console.log(bem.b('box'))
console.log(bem.e())
console.log(bem.m('disabled'))
console.log(bem.be('box', 'icon'))
console.log(bem.bm('box', 'disabled'))
console.log(bem.em('icon', 'disabled'))
console.log(bem.bem('box', 'icon', 'disabled'))
console.log(bem.is('checked', true))
