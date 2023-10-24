import React from 'react';
import styles from './styles';
import { Navbar, Feedback, MainSection, Projects, Button} from './components';
/**Weird bug occurs when I import Footer from the es6 deconstruction line above */
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='bg-primary w-full min-h-screen overflow-hidden flex flex-col'>
      <div className = {`${styles.paddingX} bg-secondary ${styles.flexCenter}`}>
        <div className = {`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className = {`bg-primary flex-1 ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <MainSection />
        </div>
      </div>

      <div className = {`bg-moonStone ${styles.paddingX} h-9 ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div> 
    </div>
    
  );
}

export default App