import React from 'react'
import styles from '../styles'
const Projects = () => {
  return (
    <div className="container min-w-full">
        <h1 className={`${styles.heading}`}>Projects</h1>

        <div className = "flex flex-row justify-around flex-wrap">
            <div className = "bg-secondary m-1 basis-full sm:basis-5/12 md:m-3 md:basis-3/12 lg:basis-4/17">
                hello
            </div>
            <div className = "bg-secondary m-1 basis-full sm:basis-5/12 md:m-3 md:basis-3/12 lg:basis-4/17">
                hello
            </div>
            <div className = "bg-secondary m-1 basis-full  sm:basis-5/12 md:m-3 md:basis-3/12 lg:basis-4/1">
                hello
            </div>

            <div className = "bg-secondary m-1 basis-full sm:basis-5/12 md:m-3 md:basis-3/12 lg:basis-1/5">
                hello
            </div>
        </div>
        Card Component 
            Card details 
            Card picture 
            Card skills 
    </div>
  )
}

export default Projects