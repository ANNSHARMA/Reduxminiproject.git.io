import React from 'react'
import { Parallax, Background } from 'react-parallax';
import image from '../assets/Images/football.avif'
const Banner = () => {
 

return(
<Parallax
        blur={{ min: -15, max: 20 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div style={{ height: '350px', width: '800px' }} />
    </Parallax>

)

  
    };
 

export default Banner