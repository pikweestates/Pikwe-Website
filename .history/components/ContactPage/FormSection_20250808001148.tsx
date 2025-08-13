import React from 'react'
import styles from "../../styles/Navigation/formsection.module.scss"

const FormSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.form__section}`}>
      <div>
        
      </div>
    </div>
  )
}

export default FormSection