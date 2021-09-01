import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Page404() {
  const history = useHistory()

  const goToMain = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={goToMain}>Click here to return to main</button>
    </div>
  )
}
