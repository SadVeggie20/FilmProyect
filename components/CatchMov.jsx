import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

export const CatchMov = ({ show }) => {
  const showId = show.id

  return (
    <div>
      <Link to={`/series/${showId}`}>
        <div>{show.image && <img src={show.image.medium} alt={show.name} />}</div>
        <div>
          <h2>{show.name}</h2>
          <p>{show.externals.thetbdb}</p>
        </div>
      </Link>
    </div>
  )
}
