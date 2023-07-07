import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const CatchInfoEpisodes = () => {
  const [episodes, setDataEpisode] = useState([])
  const location = useLocation()
  const serieId = location.pathname.split('/')[2]

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/episodes`)
      .then((response) => {
        return response.json()
      }).then((episodeInf) => {
        console.log(episodeInf)
        setDataEpisode(episodeInf)
      }).catch((error) => {
        console.error(error)
      })
  }, [serieId])

  const groupEpisodesBySeason = () => {
    const groupedEpisodes = {}
    episodes.forEach((episode) => {
      const season = episode.season || 'Unknown Season'
      if (Object.prototype.hasOwnProperty.call(groupedEpisodes, season)) {
        groupedEpisodes[season].push(episode)
      } else {
        groupedEpisodes[season] = [episode]
      }
    })
    return groupedEpisodes
  }

  const groupedEpisodes = groupEpisodesBySeason()

  return (
    <div>
      {Object.keys(groupedEpisodes).map((season) => (
        <div key={season}>
          <h2>Season {season}</h2>
          <table>
            <thead>
              <tr>
                <th>Episode</th>
                <th>Title</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {groupedEpisodes[season].map((episode) => (
                <tr key={episode.id}>
                  <td>S{episode.season} x Ep{episode.number}</td>
                  <td>{episode.name}</td>
                  <td dangerouslySetInnerHTML={{ __html: episode.summary }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
