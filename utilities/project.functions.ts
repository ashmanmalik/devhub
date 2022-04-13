import { toSnakeCase } from 'js-convert-case/lib'
import { format } from 'date-fns'

const getTitle = (child) => {
  if (child.tag === 'release-note') {
    return `release.${child.props.title}`
  }

  if (child.tag === 'response') {
    return 'Response'
  }

  return child.props.title
}
export const getHeadings = (children, page) => {
  const arr: any = []

  children.forEach((child) => {
    if (child.tag === 'h2') {
      arr.push(child)
    } else if (child.tag === 'schema') {
      arr.push(
        ...[
          { title: 'Arguments', id: 'arguments' },
          { title: 'Frequently used fields', id: 'frequent' },
          { title: 'Other fields', id: 'other' },
        ]
          .filter((item) => !page[child.props[':hidden']]?.includes(item.id))
          .map(({ title }) => ({
            title,
            props: { id: toSnakeCase(title) },
          }))
      )
    } else if (
      child.tag === 'release-note' ||
      child.tag === 'response' ||
      child.tag === 'article-teaser-section' ||
      child.tag === 'guides' ||
      child.tag === 'accordion'
    ) {
      const title = getTitle(child)

      arr.push({
        title,
        props: {
          id: slugify(title),
        },
      })
    } else if (child.children) {
      arr.push(...getHeadings(child.children, page))
    }
  })
  return arr
}

export const slugify = (str) =>
  str
    .trim()
    .replace(new RegExp('-', 'g'), '')
    .replace(/\./g, '-')
    .replace(new RegExp('\\s+', 'g'), '-')
    .toLowerCase()

export const normalizeDate = (str) => {
  const [day, month, year]: [number, number, number] = str
    .split('-')
    .map((value) => parseInt(value))

  const date = new Date(year, month - 1, day)

  return `${format(date, 'do')} of ${format(date, 'MMMM yyyy')}`
}

export const copy = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export const getFileByPath = (path, dirs) => {
  const normalizedPath = path.slice(-1) === '/' ? path.slice(0, -1) : path
  const splitPath = normalizedPath.split('/')
  const slug = splitPath.slice(-1)[0]

  const dir =
    dirs[
      dirs
        .map((dir) =>
          dir
            .split('/')
            .map((part) => part.split('+').pop())
            .join('/')
        )
        .indexOf(splitPath.slice(0, -1).join('/'))
    ]

  return `${dir || ''}/${slug}`
}
