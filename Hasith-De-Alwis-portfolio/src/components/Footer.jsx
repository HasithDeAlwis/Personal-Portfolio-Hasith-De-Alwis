import React from 'react'
import styles from '../styles'
const Footer = () => {
  return (
      <div className = {`bg-moonStone ${styles.paddingX} h-9 ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <h1 className = {`${styles.heading2} text-primary text-center`}>Enjoy the Page!</h1>
        </div>
      </div> 
  )
}

export default Footer