# react-custom-modal-library

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
        x={'24vh'}
        y={undefined}
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

| Proprety        | Type          | Default Value    | Description       |
| ----------------|:-------------:| :---------------:| :----------------:|
| show            | Boolean       |    false         | show the modal    |
| hide            | Boolean       |    false         | hide the modal    |
| width           | Int           |    null          |width of the modal |
| height          | Int           |    null          |height of the modal|
| color           | String        |    black         |Text color body modal|
| backgroundColor | String        |    white         |    background color of the modal           |
| closeColor      | String        |    black         |    color of the close cross          |
| modalTitle      | String        |    Hello         |    title of the modal          |
| modalText       | String        | Modal Clicked !  |    title of the subtext          |
| ctaBtnShow      | Boolean       |    null          |enable the call to action button          |
| ctaText         | String        | Close Button     |    Text of the call to action button          |
| ctaOnClick      | Function      | ()=> console.log |    function that is triggered on click of the call to action button          |
| x               | String        | 24vh             |    x position (from top)          |
| y               | Function      | undefined        |    y position ( from left)          |


## License

MIT © [MathisZerbib](https://github.com/MathisZerbib)
