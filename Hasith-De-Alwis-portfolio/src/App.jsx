import React from 'react';
import styles from './styles';
import { Navbar, Feedback, MainSection, Projects, Button} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className = {`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className = {`bg-primary ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <MainSection />
        </div>
      </div>

      <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
           Footer
        </div>
      </div> 
      <h1>Hello</h1>
    </div>
    
  );
}

export default App