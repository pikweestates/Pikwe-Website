import React from 'react'
import styles from "../../styles/Navigation/formsection.module.scss"

const FormSection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.form__section}`}>
      <div className={`container ${styles.form__}`}>

      </div>
    </div>
  )
}

export default FormSection