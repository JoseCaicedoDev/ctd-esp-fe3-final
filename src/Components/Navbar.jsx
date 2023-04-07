import { Link, Outlet } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"
import { useContext } from "react"
import svgSun from '../assets/sun-svgrepo-com.svg'
import svgMoon from '../assets/moon-svgrepo-com.svg'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  return (
    <>
      <nav className='w-full h-16 bg-gray-200 flex
      justify-between px-4 items-center dark:bg-red-500'>
        <Link to="/" className="space-x-1 text-2xl font-semibold dark:text-white">
          <span className=" text-red-600 dark:text-black ">DH</span>
          <span>Odonto</span>
        </Link>

        <div className="flex flex-row items-center
        gap-3">
          <ul className="flex text-sm gap-3">
            <li>
              <Link to="/" className="dark:text-white hover:text-gray-400
              dark:hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="dark:text-white hover:text-gray-400
                dark:hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/favs" className="dark:text-white hover:text-gray-400
                dark:hover:text-gray-300">
                Favs
              </Link>
            </li>
          </ul>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button className="border-gray-500 border-2 w-10 h-10 rounded-lg
          text-white hover:shadow-black shadow-sm p-2 cursor-pointer"
            onClick={() => dispatch({ type: "GET_THEME", payload: state.theme })}>
            {state.theme ? <img src={svgSun} alt="" /> : <img src={svgMoon} alt="" />}
          </button>
        </div >
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar