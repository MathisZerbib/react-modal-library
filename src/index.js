import React, {useRef, useEffect} from 'react'
import styles from './styles.module.css'

export function CustomModalComponent ({ text, color, customWidth, customHeight, isOpen, fade }) {
  console.log(color, customWidth, customHeight);


  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use document.getElementById()
    const el = document.getElementById('containerModal');
    console.log(el);

    // 👇️ (better) use a ref
    const el2 = ref.current;
    console.log(el2);
  }, []);
  // function closeModal() {
  //   console.log("Close Modal", 'fade', fade, 'isOpen', isOpen);
  // isOpen = false;
  // fade = false;
  // }

  function closeModal() {
    console.log('wxb6=source.org',  ref.current)
    ref.current.style = 'display: none;';

  }



  return isOpen ? (
    <div ref={ref} id='containerModal'>
    <div className={styles.modal + " "+ (fade ? styles.modalFade : '')}
    style={{width:customWidth,
     height:customHeight}}>
      <div className={ styles.modalOverlay }  onClick={() => {closeModal()}} />
      <span role="button" className={ styles.modalClose} aria-label="close" onClick={() =>{closeModal()}}>
        x
      </span>
      <div className={ styles.modalBody}> {text}</div>
    </div>
    </div>
  ) : null
}
