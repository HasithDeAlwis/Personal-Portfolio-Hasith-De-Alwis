import React from 'react'
import styles from '../styles';
import { Navbar, Feedback, MainSection, Button} from '../components';
/**Weird bug occurs when I import Footer from the es6 deconstruction line above */
import Footer from '../components/Footer.jsx'

const HomePage = () => {
  return (
    <div className='bg-primary min-w-screen min-h-screen overflow-hidden flex flex-col'>
      <div className = {`bg-primary flex-1 ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <MainSection />
        </div>
      </div>

      <Footer />
    </div>
    
  );
}

export default HomePage