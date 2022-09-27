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
        color='white'
        overlayColor='blue'
        backgroundColor='#4b66b7'
        closeColor='white'
        textContent='Alert Modal has been triggrered'
        subTextContent='You can specify severals things here'
        width={800}
        height={250}
        show={showModal}
        ctaBtn={true}
        ctaText='Click Me!'
        ctaOnClick={()=> {console.log('Log from cta')}}
        hide={hideModal}

      ></CustomModalComponent>
    </div>
  )
}

export default App
