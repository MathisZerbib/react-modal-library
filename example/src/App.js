import React, {useState} from 'react'
import { CustomModalComponent } from 'custom-modal-library'
import 'custom-modal-library/dist/index.css'


const App = () => {
  const [modal, setModal] = useState(false);
  const OpenModal = () => setModal(!modal);

  return (
    <>
      <button onClick={()=> { OpenModal()}}>Open Me</button>
      <CustomModalComponent isOpen={modal}  fade={modal} customWidth={700} customHeight={100} color={'blue'} text='CustomModalComponent Example 😄' />
    </>
  )
}

export default App
