import React from 'react'
import {navButtons, homeText} from '../constants/index.js';
import styles from '../styles.js';

import mainImage from '../assets/hasith.png';
import SocialMedia from './SocialMedia.jsx';



const MainSection = () => {
  return (
    <section id="home" className = "flex flex-col sm:flex-row p-85 pb-10 items-center justify-between">
      <div className = "pt-5 flex flex-1 justify-center basis-full sm:basis-1/4 p-4">
        <img src={mainImage} alt="accent photo of Hasith" className = "hover:scale-95 transition duration-500"/>
      </div>

      <div className="w-11/12 sm:w-3/4 flex flex-1 sm:items-start items-center justify-center flex-col sm:basis-1/3">
        <div className="pb-5">
          <h1 className = {`${styles.heading}`}>{homeText[0].text}</h1>
          <h1 className = {`${styles.heading2}`}>{homeText[1].text}</h1>
        </div>

        <div className = "card-shadow mb-5 p-3 rounded-lg bg-queenBlue shadow-2xl flex-1">
          <p className={`${styles.paragraph}`} >{homeText[2].text}</p>
        </div>
          

        <div className = {`w-full flex flex-0 flex-col items-center sm:flex-row justify-around py-1.5`}>
          {navButtons.map((button, index) => (
            <button key = {button.id} className = {`${styles.paragraphSmall}  text-[18px] sm:text-[14px] lg:text-[18px] text-purple-300 home-buttons mt-5 sm:mt-0 justify-around ${index == 0 ? 'ml-0' : 'ml-4'}`}>{button.title}</button>
          ))}
        </div>
      </div>

      <SocialMedia />
    </section>
  )
}

export default MainSection