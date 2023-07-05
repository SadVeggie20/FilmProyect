import { useState } from 'react'
import { SearchbarHome } from '../components/SearchbarHome'
import { CatchMov } from '../components/CatchMov'

export const Home = () => {
  const [data, setData] = useState([])

  const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search}`)
      .then((response) => {
        return response.json()
      }).then((movieInf) => {
        console.log(movieInf)
        setData(movieInf.data)
      }).catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <div>Home</div>
      <div className='search-container'>
        <SearchbarHome handleSearch={sendSearch} />
      </div>
      <div className='table'>
        {
        data.map((item) => (
          <CatchMov key={item.id} {...item} />
        ))
      }
      </div>
    </div>
  )
}
