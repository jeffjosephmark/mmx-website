import Splitting from 'splitting'

export default {
  bind (el, binding) {
    el.innerHTML = binding.value
    Splitting({ target: el, by: binding.arg })
  },
  update (el, binding) {
    el.innerHTML = binding.value
    Splitting({ target: el, by: binding.arg })
  }
}
