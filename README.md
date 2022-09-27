# custom-modal-library

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/custom-modal-library.svg)](https://www.npmjs.com/package/custom-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-modal-library
```

## Usage Standalone

```jsx
import React, { useState } from 'react'

import { CustomModalComponent } from 'custom-modal-library'

function CustomModal() {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
      >
       Show Modal
      </button>
      <CustomModalComponent show={showModal} hide={hideModal}>
        <h1>Text example</h1>
      </CustomModalComponent>
    </div>
  )
}

export default CustomModal
```

## Usage with react props

```jsx
import React from 'react'

import { CustomModalComponent } from 'custom-modal-library'

function CustomModal(props) {
  return (
    <div>
      <CustomModalComponent show={props.show} hide={props.hide} >
        <h1>Text example</h1>
      </CustomModalComponent>
    </div>
  )
}

export default CustomModal
```


## Full Customization standalone

```jsx
import React, { useState } from 'react'

import { CustomModalComponent } from 'custom-modal-library'

function CustomModal() {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
      >
       Show Modal
      </button>
      <CustomModalComponent color='white'
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
        hide={hideModal} >
      </CustomModalComponent>
    </div>
  )
}

export default CustomModal

```



## License

MIT © [MathisZerbib](https://github.com/MathisZerbib)
