import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'

export default function Form() {
  const initialFormData = { name: '', image: '' }
  const urlPictures = 'http://localhost:5000/pictures'
  const [formData, setFormData] = useState(initialFormData)

  const fileResizer = async (e) => {
    if (e.target.files[0]) {
      try {
        await Resizer.imageFileResizer(
          e.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            setFormData({ ...formData, image: uri })
          },
          'base64',
          200,
          200
        )
      } catch (err) {
        console.log(err.message)
      }
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(urlPictures, formData)
    setFormData(initialFormData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" value={formData.name} onChange={handleChange} />
        <input type="file" onChange={fileResizer} />
        <button>Submit</button>
      </form>
      <p>{formData.name}</p>
      <img src={formData.image} />
    </div>
  )
}
