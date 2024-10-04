import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">

          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'bg-orange-600 text-white uppercase font-bold hover:cursor-pointer hover:bg-orange-500 rounded-lg p-2 transition' : 'text-white uppercase font-bold hover:cursor-pointer hover:bg-orange-500 rounded-lg p-2 transition'}
            >Inicio</NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => isActive ? 'bg-orange-600 text-white uppercase font-bold hover:cursor-pointer hover:bg-orange-500 rounded-lg p-2 transition' : 'text-white uppercase font-bold hover:cursor-pointer hover:bg-orange-500 rounded-lg p-2 transition'}
            >Favoritos</NavLink>
          </nav>

        </div>
      </div>
    </header>
  )
}

