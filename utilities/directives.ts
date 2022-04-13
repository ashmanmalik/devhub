import Vue from 'vue'

// interface Binding extends DirectiveBinding {
//   fn: () => void
//   clear: () => void
// }
Vue.directive('animate', {
  bind(el, binding: any) {
    el.classList.add('animate')

    binding.fn = () => {
      binding.clear()
      el.classList.add('animated-in')
    }

    binding.clear = () => window.removeEventListener('scroll', binding.fn)
    window.addEventListener('scroll', binding.fn)
  },
  inserted(_, binding: any) {
    if (binding.fn) {
      setTimeout(binding.fn, 100)
    }
  },
  unbind(_, binding: any) {
    if (binding.clear) {
      binding.clear()
    }
  },
})
