import React from 'react'
import styles from "../../styles/Portfolio/portfoliosection.module.scss"

const PortfolioSection = ({ref}: {ref: React.RefObject<HTMLDivElement | null>;}) => {
  return (
    <div ref={ref} className={`section ${styles.ps__section}`}>
      <div className={`container {}`}>

      </div>

    </div>
  )
}

export default PortfolioSection