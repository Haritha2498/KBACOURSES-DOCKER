import React from 'react'
import Nevbar from '../components/Nevbar.jsx'
import Hero from '../components/Hero.jsx'
import Cards from '../components/Cards.jsx'
import Button from '../components/Button.jsx'



const Homepage = () => {
  return (
    <>
   
    <Hero />
    <Cards isHome={true}/>
    <Button />
    </>
  )
}

export default Homepage