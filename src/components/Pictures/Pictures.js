import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pictures() {
  const urlPictures = 'http://localhost:5000/pictures'
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const getPictures = async () => {
      const { data } = await axios.get(urlPictures)
      setPictures(data)
    }
    getPictures()
  }, [])

  console.log(pictures)

  return (
    <div>
      <h1>Pictures</h1>
      {pictures.map((picture) => (
        <div>
          <p>{picture.name}</p>
          <img src={picture.image} />
        </div>
      ))}
    </div>
  )
}
