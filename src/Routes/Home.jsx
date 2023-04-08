import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context'
const URL = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal)


  useEffect(() => {
    axios.get(URL)
      .then(res => dispatch({ type: "GET_DATA", payload: res.data }))
      .catch(error => console.log(error))
  }, [dispatch])

  return (
    <main className='h-screen'>
      <h1 className='py-4 text-3xl font-semibold
      dark:text-gray-100'>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          state.data.map((dentist) => <Card name={dentist.name}
            username={dentist.username}
            key={dentist.id}
            id={dentist.id}
            favoriteHidden={true} />)
        }
      </div>
    </main>
  )
}

export default Home