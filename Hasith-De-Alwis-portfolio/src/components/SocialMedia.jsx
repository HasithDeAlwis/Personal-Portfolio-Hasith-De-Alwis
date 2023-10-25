import React from 'react'
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

const SocialMedia = () => {
  return (
    <div className = "sm:pl-4 flex flex-initial sm:flex-col sm:justify-center flex-row justify-center">
        <a href="mailto:hasithde24@gmail.com"> <img src={gmail} alt="gmail link and gmail icon" className = "cursor-pointer w-[40px] h-[40px] m-3"/></a>
        <a href="https://www.linkedin.com/in/hasith-de-alwis-09aba4295/"> <img alt="linkedin link and linkedin icon" src={linkedin} className = "cursor-pointer w-[50px] h-[50px] m-3"/></a>
        <a href="https://www.instagram.com/hasith_101/"> <img src={instagram} alt="instagram link and instagram icon" className = "cursor-pointer w-[50px] h-[50px] m-3"/></a>
    </div>
  )
}

export default SocialMedia