import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import { NotificationSliceType, createNotificatiosSlice } from "./notificationSlice";
export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType>()(
  devtools(
    (...a) => ({
      ...createRecipesSlice(...a),
      ...createFavoritesSlice(...a),
      ...createNotificatiosSlice(...a),
    })))
