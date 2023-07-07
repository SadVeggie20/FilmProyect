import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const CatchInfoCast = () => {
  const [data, setData] = useState([])
  const location = useLocation()
  const serieId = location.pathname.split('/')[2]

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/cast`)
      .then((response) => {
        return response.json()
      }).then((serieInf) => {
        console.log(serieInf)
        setData(serieInf)
      }).catch((error) => {
        console.error(error)
      })
  }, [serieId])

  return (
    <div>
      {data.map((actor) => (
        <div key={actor.person.id}>
          <img src={actor.person.image && actor.person.image.medium} alt={actor.person.name} />
          <div>
            <p>{actor.person.name || 'Loading...'}</p>
            <p>Character: {actor.character.name || 'Loading...'}</p>
          </div>
        </div>
      ))}
    </div>

  )
}
