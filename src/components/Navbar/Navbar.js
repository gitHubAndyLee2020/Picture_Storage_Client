import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  const history = useHistory()

  const goToMain = () => {
    history.push('/')
  }

  const goToForm = () => {
    history.push('/form')
  }

  const goToPictures = () => {
    history.push('/pictures')
  }

  return (
    <div>
      <button onClick={goToMain}>Main</button>
      <button onClick={goToForm}>Form</button>
      <button onClick={goToPictures}>Pictures</button>
    </div>
  )
}
