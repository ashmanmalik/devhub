import Vue from 'vue'
import { format } from 'date-fns'
import marked from 'marked'

Vue.filter('date', (value: Date | string, formatStr: string) => {
  return format(value instanceof Date ? value : new Date(value), formatStr)
})
Vue.filter('number', (value: number, locale = 'nl-NL') => {
  return value.toLocaleString(locale)
})
Vue.filter('markdown', (value: string) => {
  try {
    return marked(value)
  } catch (e) {
    return value
  }
})

Vue.filter('colorType', (value: string = '') => {
  value = value.toLowerCase()

  if (value === 'string') {
    return `<span class="hljs-string">${value}</span>`
  }

  if (value === 'non_null' || value === 'id') {
    return `<span class="hljs-keyword">${value}</span>`
  }

  if (value === 'list' || value === 'json') {
    return `<span class="hljs-attribute">${value}</span>`
  }

  if (value === 'object' || value === 'enum') {
    return `<span class="hljs-literal">${value}</span>`
  }

  if (value === 'boolean' || value === 'int' || value === 'float') {
    return `<span class="hljs-number">${value}</span>`
  }

  return value
})
