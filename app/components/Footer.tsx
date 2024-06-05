import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <section id='footer' className='dark:bg-black mt-4'>
      <Container>
        <div className='w-full h-20 flex justify-center items-center'>
          <p className='text-center italic'>&copy; Copyright 2021-2024 by Kene Ogu.</p>
        </div>
      </Container>
    </section>
  )
}

export default Footer