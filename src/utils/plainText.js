const plainText = input => {
  if (!input) return null

  if (typeof input === 'string') return input

  if (Array.isArray(input)) {
    return input.map(el => plainText(el)).join('')
  } else if (input.props && input.props.type === 'text') {
    return input.props.value
  } else if (input.type === 'text') {
    return input.value
  } else if (input.props && input.props.children) {
    return plainText(input.props.children)
  } else {
    return plainText(input.children)
    // debugger;
  }
}
export default plainText
