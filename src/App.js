import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Routes from './Routes/Routes'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
