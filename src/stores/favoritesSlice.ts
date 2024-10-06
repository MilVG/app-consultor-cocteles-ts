import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
  favoritesExists: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoritesExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      }))
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }))
    }
    createRecipesSlice(set, get, api).closeModal()

  },
  favoritesExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  }
})
