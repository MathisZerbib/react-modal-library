import React, { useState } from 'react'

import { CustomModalComponent } from 'custom-modal-library'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>react-modal</h1>
      <button
        style={{
          width: '200px',
          display: 'block',
          margin: '0 auto',
          padding: '10px',
          background: 'none',
          border: 'none',
          backgroundColor: '#eee',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <CustomModalComponent
        fadeDuration='2'
        width={800}
        height={250}
        color='white'
        overlayColor='blue'
        backgroundColor='#4b66b7'
        closeColor='white'
        show={showModal}
        onClickCloseBtn={hideModal}
        textContent='Alert Modal has been triggrered'
        subTextContent='You can specify severals things here'
        ctaBtn={true}
        ctaText='Click Me!'
        ctaOnClick={()=> {console.log('Log from cta')}}
      ></CustomModalComponent>
    </div>
  )
}

export default App
