import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu, { MenuItem } from './components/Menu/Menu'
import Header from './components/Header/Header'

import HeroDesktop from './assets/images/image-hero-desktop.png'
import HeroMobile from './assets/images/image-hero-mobile.png'
import Button from './components/Button/Button'

import ImgDatabiz from "./assets/images/client-databiz.svg"
import ImgAudiophile from "./assets/images/client-audiophile.svg"
import ImgMaker from "./assets/images/client-maker.svg"
import ImgMeet from "./assets/images/client-meet.svg"
import { useMediaQuery } from 'react-responsive'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const WorkBreaker = isTabletOrMobile ? null : <br />;

  return (
    <div className='container'>
      <Header />
      <div
        className={isTabletOrMobile ? 'main-mobile' : 'main'}>
        {
          isTabletOrMobile &&
          <img
            alt='Hero'
            src={HeroMobile} />
        }
        <div className='info-wrapper'>
          <h1
            className='hero-text'>Make {WorkBreaker} remote work
          </h1>
          <p>
            Get your team in sync, no matter your location.{WorkBreaker}
            Streamline processes, create team rituals, and{WorkBreaker}
            watch productivity soar.
          </p>
          <Button
            variant='contained'
            text='Learn more' />
          <div
            className='clients-wrapper'>
            <img
              alt='Data Biz'
              src={ImgDatabiz} />
            <img
              alt='Audiophile'
              src={ImgAudiophile} />
            <img
              alt='Meet'
              src={ImgMeet} />
            <img
              alt='Maker'
              src={ImgMaker} />
          </div>
        </div>
        {
          !isTabletOrMobile &&
          <img
            src={HeroDesktop}
            alt="Hero" />
        }
      </div>
    </div>
  )
}

export default App
