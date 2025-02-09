import React from 'react'
import { Parallax, Background } from 'react-parallax';
import image from '../assets/Images/football.avif'
const Banner = () => {
 

return(
<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div style={{ height: '200px' }} />
    </Parallax>

)

  
    };
 

export default Banner