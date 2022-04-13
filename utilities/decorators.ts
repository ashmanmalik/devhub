import { Vue } from 'vue/types/vue'

const add = (target: Vue, functionName: string) => {
  if (!target.listeners) target.listeners = []

  target.listeners.push(functionName)
}

export function Listen(name: string) {
  return function (target: Vue, key: string, descriptor: PropertyDescriptor) {
    add(target, key)

    const oldValue = descriptor.value

    descriptor.value = function (...args) {
      if (args[0] === 'decorator') {
        const fn = oldValue.bind(this)

        window.addEventListener(name, fn, true)

        return () => window.removeEventListener(name, fn, true)
      } else {
        return oldValue.apply(this, args)
      }
    }

    return descriptor
  }
}
