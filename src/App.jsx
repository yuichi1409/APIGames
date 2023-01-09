import "./App.css";
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import {Admin, Analytics, Dashboard, Landing, Home} from './pages'
import Inicio from './components/Inicio'
import { useState } from "react";
import {ProtectedRoute} from './components/ProtectedRoute'
import Games from './components/Games'

function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    //Peticion terminada
    setUser({
      id:1,
      name:"John",
      permission: ['analize'],
      roles: ['admin']
    })
  }

  const logout = () => setUser(null)
  return (
    <Router>

      <Navigation/>

      {
        user ? (
          <button onClick={logout}>Logout</button>
        ): (
          <button onClick={login}>Login</button>
        )
      }
      <Routes>
        <Route index element = {<Landing />} />
        <Route path="/landing" element ={<Landing />} />
        <Route path="/inicio" element ={<Inicio />} />
        <Route path="/games" element={<Games />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/analytics" element={
        <ProtectedRoute isAllowed={!!user && user.permission.includes('analize')}
        redirectTo="/Home"
        >
          <Analytics />
        </ProtectedRoute>
        } />
        <Route path="/admin" element={
        <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')}
        redirectTo="/home"
        >
          <Admin />
        </ProtectedRoute>
        } />
      </Routes>

    </Router>
  );
}

function Navigation(){
  return <nav>
    <ul>
      <li>
        <Link to ="/Landing">Landing</Link>
      </li>
      <li>
        <Link to ="/home">Home</Link>
      </li>
      <li>
        <Link to ="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to ="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to ="/admin">Admin</Link>
      </li>
      <li>
        <Link to ="/games">Games</Link>
      </li>
      <li>
        <Link to ="/inicio">Inicio</Link>
      </li>
    </ul>
  </nav>

}
export default App;
