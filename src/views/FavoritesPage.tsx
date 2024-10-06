import { useMemo } from "react"
import Drinkcard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)
  const comprobarDatosFavorites = useMemo(() => favorites.length > 0, [favorites])

  return (
    <>
      <h1 className="text-6xl font-extrabold">favorites</h1>
      {comprobarDatosFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {favorites.map(drink => (
            <Drinkcard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se mostrarn aqui{' '}
          <span className="text-orange-600"> Agrega Alguno de ellos</span>
        </p>
      )}
    </>
  )
}

