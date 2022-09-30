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
    <div className={!showModal ? "fade" : "show fade"}>
      <button
        onClick={() => setShowModal(true)}
      >
       Show Modal
      </button>
      <CustomModalComponent
        className="modal-fade"
        color='white'
        overlayColor='blue'
        backgroundColor='#4b66b7'
        closeColor='white'
        modalTitle='Alert Modal has been triggrered'
        modalText='You can specify severals things here'
        width={800}
        height={250}
        show={showModal}
        ctaBtnShow={true}
        ctaText='Click Me!'
        ctaOnClick={()=> {console.log('Log from cta')}}
        hide={hideModal} >
      </CustomModalComponent>
    </div>
  )
}

export default CustomModal

```

## Some CSS to add transition based on your choice

```
.fade {
  transition: opacity .15s linear;
}
.modal-fade {
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out,-webkit-transform .3s ease-out;
  -webkit-transform: translateY(-50px);
  transform: translateY(-50px);
}
```


## Propreties List

| Proprety        | Type          | Default Value    |
| ----------------|:-------------:| :---------------:|
| show            | Boolean       |    false         |
| hide            | Boolean       |    false         |
| width           | Int           |    null          |
| height          | Int           |    null          |
| color           | String        |    black         |
| backgroundColor | String        |    white         |
| closeColor      | String        |    black         |
| modalTitle      | String        |    Hello         |
| modalText       | String        | Modal Clicked !  |
| ctaBtnShow      | Boolean       |    null          |
| ctaText         | String        | Close Button     |
| ctaOnClick      | Function      | ()=> console.log |


## License

MIT © [MathisZerbib](https://github.com/MathisZerbib)
