import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"



export type RecipeSliceType = {
  categories: Categories,
  drinks: Drinks,
  selectedRecipe: Recipe,
  modal: boolean
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
  closeModal: () => void
}
export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories: categories
    })
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters)
    set({
      drinks: drinks
    })
  },
  selectRecipe: async (id) => {
    const selectRecipe = await getRecipeById(id)
    set({
      selectedRecipe: selectRecipe,
      modal: true
    })

  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
})
