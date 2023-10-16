import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


export default function () {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div><Footer /></div>
    </div>
  )
}
