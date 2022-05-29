import { createStore } from 'vuex'
import catalog from '../data/catalog.json'
import lines from '../data/line.json'
import categories from '../data/category.json'
import solutions from '../data/solution.json'
import reviews from '../data/review.json'
import breeds from '../data/breed.json'
import aphorisms from '../data/aphorism.json'

export interface User {
  firstName: string
  lastName: string
}

const store = createStore({
  state: {
    catalog: catalog,
    categories: categories,
    lines: lines,
    solutions: solutions,
    breeds: breeds,
    reviews: reviews,
    aphorisms: aphorisms,
  },
  getters: {
    getProductsByCategory: (state) => (category: string) => {
      return state.catalog.filter((product) => product.category === category)
    },
    getProductsByLine: (state) => (line: string) => {
      return state.catalog.filter((product) => product.line === line)
    },
    getProductsBySolution: (state) => (solution: string) => {
      return state.catalog.filter(
        (product) => product.solutions != undefined && product.solutions.includes(solution)
      )
    },
    getReviewsByProduct: (state) => (productSlug: string) => {
      return state.reviews.filter(
        (review) => review.products != null && review.products.includes(productSlug)
      )
    },
    getRandomAphorism: (state) => () => {
      return state.aphorisms[Math.floor(Math.random() * state.aphorisms.length)]
    },
    getCategoryBySlug: (state) => (categorySlug: string) => {
      return state.categories.find((category) => category.slug === categorySlug)
    },
    getLineBySlug: (state) => (lineSlug: string) => {
      return state.lines.find((line) => line.slug === lineSlug)
    },
    getSolutionBySlug: (state) => (solutionSlug: string) => {
      return state.solutions.find((solution) => solution.slug === solutionSlug)
    },
    getProductBySlug: (state) => (productSlug: string) => {
      return state.catalog.find((product) => product.slug === productSlug)
    },
    getBreedBySlug: (state) => (breedSlug: string) => {
      return state.breeds.find((breed) => breed.slug === breedSlug)
    },
    getBreeds: (state) => () => {
      return state.breeds
    },
  },
  mutations: {},
  actions: {},
})

export default store
