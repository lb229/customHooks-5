
import './App.css'
import { useCurrentLocation } from './components/useCurrentLocation'

export function App() {
 
  const {location, latitude, longitude} = useCurrentLocation()
      console.log(location);
  return (
    <>
    <h1>HELLO!</h1>
    <div>
    <p>longitude:{longitude}</p>
    <p>latitude:{latitude}</p>
    </div>
    </>
  )
}


