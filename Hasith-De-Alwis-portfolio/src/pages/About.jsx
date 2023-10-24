import React from 'react'
import styles from '../styles';
import mainImage from '../assets/placeholder.webp';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className = "min-w-screen min-h-screen overflow-hidden flex flex-col">
        <section className = {`flex flex-col flex-0 sm:flex-row p-85 pb-10 flex-1 justify-center`}>

            <div className = "card-shadow self-center m-5 sm:ml-5 mt-5 sticky top-1 rounded-lg bg-queenBlue pt-5 basis-1/4 flex flex-col items-center">
                <div className="flex flex-col items-center w-3/4 m-5 bg-primary">
                    <div className="image w-3/4 mt-2">
                        <img alt="place-holder-image" src={mainImage} className = "object-contain h-30 w-30"/>
                    </div>

                    <div className = "atributes">
                        <p className={`${styles.paragraph} m-2 text-queenBlue border-b-4`}>Random text: more-random text</p>
                        <p className={`${styles.paragraph} m-2 text-queenBlue border-b-4`}>Random text: more-random text</p>
                        <p className={`${styles.paragraph} m-2 text-queenBlue border-b-4`}>Random text: more-random text</p>
                    </div>
                </div>
            </div>

            <div className="card-shadow2 m-3 sm:ml-5 mt-5 self-start rounded-lg bg-moonStone flex basis-11/12 ss:basis-4/5 flex-col md:basis-3/5 lg:basis-1/3">
                <h1 className={`${styles.heading}`}>About me!</h1>
                <p className={`${styles.paragraph}`}>A little bit here and there about me!</p>
            </div>

            <SocialMedia />

        </section>
        <Footer />
    </div>
  )
}

export default About