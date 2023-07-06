import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

export const CatchMov = ({ show }) => {
  return (
    <div>
      <Link to='/MoviePage'>
        <div>{show.image && <img src={show.image.medium} alt={show.name} />}</div>
        <div>
          <h2>{show.name}</h2>
        </div>
      </Link>
    </div>
  )
}
