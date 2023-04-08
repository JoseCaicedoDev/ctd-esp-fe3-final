import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState()

  const { dentistId } = useParams()
  const URL_FIND = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(URL_FIND, { params: { 'id': dentistId } })
      .then(res => setDentist(res.data[0]))
      .catch(error => console.log(error))
  }, [dentistId])

  if (!dentist) {
    return <p>Loading...</p>;
  }
  const { name, email, phone, website, id } = dentist
  console.log("den", dentist)

  return (
    <div className='h-screen'>
      <h1 className='py-4 text-xl font-semibold dark:text-white'>{`Detail Dentist ${id}`} </h1>
      <table className='table-fixed max-w-2xl mx-auto
        dark:bg-red-100'>
        <tbody>
          <tr>
            <td>Name </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Email </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>WebSite </td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table >
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail