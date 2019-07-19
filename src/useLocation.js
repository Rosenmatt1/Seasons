import { useState, useEffect } from 'react'

const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErr(error.message)
    )
  }, [])

  // not best practices for hooks becasue doesn't allow for destructing with array
  // return { lat: lat, err: err} 
  return [lat, err]
}


export default useLocation 