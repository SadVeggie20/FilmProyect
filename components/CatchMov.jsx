export const CatchMov = ({ show }) => {
  return (
    <div>
      <a href={show.url}><div> {show.image && <img src={show.image.medium} alt={show.name} />}</div></a>
      <div>
        <h2>{show.name}</h2>
        <p>Genres: {show.genres[0]}, {show.genres[1]}</p>
        <p>Status: {show.status}</p>
        <p>Sumary</p>
        <div>
          {show.summary}
        </div>
      </div>
    </div>
  )
}
