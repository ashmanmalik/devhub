const { toSnakeCase } = require('js-convert-case/lib')

const getFrequentlyUsedAttributes = (fields, frequent) =>
  fields.filter((field) => frequent.includes(field.name))

const getAttributes = (fields, frequent) =>
  fields.filter((field) => !frequent.includes(field.name))

const getSections = ({
  requestParameters,
  frequentlyUsedAttributes,
  attributes,
}) =>
  [
    {
      title: 'Arguments',
      items: requestParameters,
    },
    {
      title: 'Frequently used fields',
      items: frequentlyUsedAttributes,
    },
    {
      title: 'Other fields',
      items: attributes,
    },
  ]
    .filter((section) => section.items?.length)
    .map((section) => {
      const id = toSnakeCase(section.title)

      return {
        ...section,
        id,
        items: normalizeItems(section.items, id),
      }
    })

const normalizeItems = (arr, id) =>
  arr.map((item) => {
    const itemId = `${id}-${item.name}`
    return {
      ...item,
      propertyId: itemId,
      children: normalizeItems(item.children, itemId),
    }
  })

module.exports = { getSections, getAttributes, getFrequentlyUsedAttributes }
