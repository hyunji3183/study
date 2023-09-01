import React, { useContext } from 'react'
import Context, { MyContext } from '../Context'

function Home() {
  const { data, setstate } = useContext(MyContext)
  return (
    <div>Home</div>
  )
}

export default Home