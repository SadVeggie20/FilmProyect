export const CatchInfoSeries = ({ seriesId }) => {
  const [data, setData] = useState([])

  const sendSearch = (sriesId) => {

    fetch(`https://api.tvmaze.com/search/shows?q=${seriesId}`)
      .then((response) => {
        return response.json()
      }).then((serieInf) => {
        console.log(serieInf)
        setData(serieInf)
      }).catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <div>{show.image && <img src={show.image.medium} alt={show.name} />}</div>
      <div>
        <h2>{show.name}</h2>
      </div>
    </div>


  )
}
