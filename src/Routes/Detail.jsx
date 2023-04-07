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
  const { name, email, phone, website } = dentist
  console.log("den", dentist)

  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail