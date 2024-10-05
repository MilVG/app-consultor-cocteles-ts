import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import Drinkcard from "../components/DrinkCard"

export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)

  const VerificarDatosVaciosDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      {VerificarDatosVaciosDrinks ? (
        <div className="grid grid-c md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map(drink => (
            <Drinkcard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay resultados aún, utiliza el formulario para buscar recetas
        </p>
      )}
    </>
  )
}

