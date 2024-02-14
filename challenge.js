export { strictEquals }

function stricEquals (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return 'False, Rule Exception'
  } else if (Object.is(a, -0) && Objects.is(0,b) || Object.is(a, 0) && Object.is(-0, b)) {
    return 'True, Rule Exception'
  } else if (Object.is(a, b)) {
    return true
  }
  return false
}
