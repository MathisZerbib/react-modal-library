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
      <CustomModalComponent show={showModal} onClickCloseBtn={hideModal}>
        <h1>I am a modal</h1>
      </CustomModalComponent>
    </div>
  )
}

export default App
