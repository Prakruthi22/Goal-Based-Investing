import React,{useState} from 'react'
import { HeroContainer, HeroBg,VideoBg,HeroH1,HeroP,HeroContent , HeroBtnWrapper, ArrowForward,ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
const HeroSection = () => {
    const[hover,setHover] =useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />  
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Goal Based Investing 
                </HeroH1>
                <HeroP>
                    Finding difficulty in tracking you're investments? Want goal based suggestions? Well, you're at the right place . Let's get started.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Get started {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
  )
}

export default HeroSection