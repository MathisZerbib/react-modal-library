import React from 'react'
import styles from './styles.module.css'

export const CustomModalComponent = ({ text, color, customWidth, customHeight, isOpen, fade }) => {
  console.log(color, customWidth, customHeight)
  const closeModal = () => {
    console.log("courcou")
  }


  return isOpen ? (
    <div className={styles.modal + " "+ (fade ? styles.modalFade : '')}
    style={{width:customWidth,
     height:customHeight}}>
      <div className={ styles.modalOverlay }  onClick={closeModal()} />
      <span role="button" className={ styles.modalClose} aria-label="close" onClick={closeModal()}>
        x
      </span>
      <div className={ styles.modalBody}> {text}</div>
    </div>
  ) : null
}
