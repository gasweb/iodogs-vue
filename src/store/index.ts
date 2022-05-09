import { createStore } from 'vuex'
import catalog from '../data/catalog.json'
import lines from '../data/line.json'
import categories from '../data/category.json'

export interface User {
  firstName: string
  lastName: string
}

const store = createStore({
  state: {
    catalog: catalog,
    categories: categories,
    lines: lines,
  },
  getters: {
    getProductsByCategory: (state) => (category: string) => {
      return state.catalog.filter((product) => product.category === category)
    },
    getProductsByLine: (state) => (line: string) => {
      return state.catalog.filter((product) => product.line === line)
    },
    getCategoryBySlug: (state) => (categorySlug: string) => {
      return state.categories.find((category) => category.slug === categorySlug)
    },
    getLineBySlug: (state) => (lineSlug: string) => {
      return state.lines.find((line) => line.slug === lineSlug)
    },
    getProductCoverBySlug: (state) => (productSlug: string) => {
      const product = state.catalog.find((product) => product.slug === productSlug)
      const productImages = product.images
      if (productImages.length > 0) {
        return productImages[0]
      }
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})

export default store
