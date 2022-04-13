import Vuex from 'vuex'
import cookie from 'cookie'
import Main from './modules/root'
import menuConfig from '~/utilities/menu-config'

const getObj = (list, arr) => {
  arr.forEach((p) => {
    list = list.children.find((i) => i.path === p.split('+').pop())
  })

  return list
}

const sortTree = (arr) => {
  arr?.sort((a, b) => a.order - b.order)

  arr?.forEach((child) => {
    if (child.children) {
      sortTree(child.children)
    }
  })

  return arr
}
const getSideNav = (pages) => {
  const sideNav = pages.reduce(
    (tree, page) => {
      const pathParts = page.path.split('/').slice(1)

      let fullPath = ''

      let obj = tree

      pathParts.forEach((p, i) => {
        obj = getObj(tree, pathParts.slice(0, i))

        let [order, path] = p.split('+')

        fullPath += `/${path || order}`
        path = path || p

        if (pathParts.length - 1 === i) {
          const to =
            page.path === '/home'
              ? '/'
              : page.path
                  .split('/')
                  .map((part) => part.split('+').pop())
                  .join('/')

          obj.children.push({
            to,
            order: page.order,
            icon: page.icon,
            title: page.title,
            ...(page.slug === 'home' && { hideChildren: true }),
            children: [],
          })
        } else if (!obj.children.find((child) => child.path === path)) {
          obj.children.push({
            order: parseInt(order),
            path,
            fullPath,
            children: [],
            title: path.replace(new RegExp('-', 'g'), ' '),
          })
        }
      })

      return tree
    },
    { children: [] }
  ).children

  const sortedTree = sortTree(sideNav)

  return menuConfig.groups.reduce((groups: any, group) => {
    groups.push(
      group.map((to) => {
        const find = sortedTree.find(
          (item) => item.path === to || item.to === to
        )

        return {
          ...find,
          icon: find.icon || menuConfig.icons[find.path || find.to],
        }
      })
    )

    return groups
  }, [])
}

export default () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      async nuxtServerInit({ commit }, args) {
        const { $content, ssrContext } = args

        const cookies = cookie.parse(ssrContext?.req?.headers?.cookie || '')
        const darkMode = cookies.dark_mode

        commit('setDarkMode', darkMode ? darkMode === 'true' : false)

        const pages = await $content('', { deep: true }).fetch()

        if (process.server) {
          commit('setDirs', $content.database.dirs)
        }

        if (pages) {
          const sideNav = await getSideNav(pages)
          commit('setSideNav', sideNav)
        }
      },
    },
    modules: {
      root: Main,
    },
  })
