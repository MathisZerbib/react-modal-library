import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Backdrop from './backdrop'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}
const modalMainContentStyles = {
   padding: '0 20px',
    textAlign: 'center',
    margin: '0.5rem'
}


const ButtonStyle = {
  width: '200px',
  display: 'block',
  margin: '0px auto',
  padding: '10px',
  background: 'rgb(238, 238, 238)',
  border: 'medium none',
  fontSize: '20px',
  cursor: 'pointer'
}
export function CustomModalComponent({
  children,
  show,
  hide,
  width,
  height,
  color,
  backgroundColor,
  closeColor,
  modalTitle,
  modalText,
  ctaBtnShow,
  ctaText,
  ctaOnClick,
  x,
  y
}) {
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
    margin: '0 auto',
    zIndex: 1,
    position: 'relative',
    padding: '10px',
    borderRadius: '25px',
    color: 'black',
    top: '34vh'
  }

  if (backgroundColor) modalStyles.backgroundColor = backgroundColor
  if (color) modalStyles.color = color
  if (width) modalStyles.width = width
  if (height) modalStyles.height = height
  if (closeColor) closeBtnStyles.color = closeColor
  if(y) modalStyles.top = y
  if(x) modalStyles.left = x
  if (!modalText) modalText = 'Modal Clicked !'
  if (!modalTitle) modalTitle = 'Hello'
  if (ctaBtnShow && !ctaText) {
    ctaText = 'Close Button'
  }
  if ((ctaBtnShow && ctaOnClick == null) || undefined) {
    ctaOnClick = () => {
      console.log('log from call to action button')
    }
  }
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={hide} />
          <div style={modalStyles}>
            <button onClick={hide} style={closeBtnStyles}>
              X
            </button>
            {children}
            <div style={modalMainContentStyles}>
              <h1>{modalTitle}</h1>
              <p>{modalText}</p>
              {ctaBtnShow && (
                <>
                  <button style={ButtonStyle} onClick={ctaOnClick}>
                    {ctaText}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

CustomModalComponent.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
  hide: PropTypes.func
}

export default CustomModalComponent
