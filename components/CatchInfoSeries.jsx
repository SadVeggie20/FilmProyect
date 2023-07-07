import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export const CatchInfoSeries = ({ image, status, summary, genres, name, id, rating, language }) => {
  const [data, setData] = useState([])
  const location = useLocation()
  const serieId = location.pathname.split('/')[2]

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}`)
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
      <div>
        <img src={data.image && data.image.medium} alt={data.name} />
      </div>
      <div>
        <h1>{data.name || 'Loading...'}</h1>
        <p>Genre: {data.genres && data.genres.join(', ')}</p>
        <p>Language: {data.language}</p>
        <p>Status: {data.status}</p>
        <p>Rating: {data.rating && data.rating.average}</p>
        <h2>Summary</h2>
        <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
      </div>
    </div>

  )
}

/*
<div><img src={data.image.medium} alt={data.name} /></div>
      <div>
        <h1>{name}</h1>
        <p>Genre: {genres[0]}, {genres[1]}</p>
        <p>Language: {language}</p>
        <p>Status: {status}</p>
        <p>Rating: {rating}</p>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
*/
