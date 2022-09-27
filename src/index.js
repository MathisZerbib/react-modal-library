import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Backdrop from './backdrop'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

let transition = `@keyframes fade-in {
  0% {
    animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;


export function CustomModalComponent ({ children, show, onClickCloseBtn, width, height, color, backgroundColor, closeColor, textContent, subTextContent, ctaBtn, ctaText, ctaOnClick }) {
  let closeBtnStyles = {
    position: 'absolute',
    right: '20px',
    top: '20px',
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    cursor: 'pointer'
  }
  let modalStyles = {
    maxWidth: '500px',
    width: '100%',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    margin: '100px auto 0',
    zIndex: 1,
    position: 'relative',
    padding: '10px',
    borderRadius: '25px'
  }

  modalStyles.backgroundColor = backgroundColor
  modalStyles.color = color
  modalStyles.width = width
  modalStyles.height = height
  modalStyles.animation = transition+' 5s'
  closeBtnStyles.color = closeColor
  return (
    // <AnimateOnChange animationIn="popIn" animationOut="popOut">
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
            <div className='main-content-modal'>
            <h1 className='header-content'>{textContent}</h1>
            <p>{subTextContent}</p>
            {ctaBtn && (
              <>
              <button className='button1' onClick={ctaOnClick}>{ctaText}</button>
              </>
            )}
          </div>
            </div>

        </div>
      )}
    </Fragment>
    // </AnimateOnChange>
  )
}

CustomModalComponent.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
  onClickCloseBtn: PropTypes.func
}

export default CustomModalComponent
