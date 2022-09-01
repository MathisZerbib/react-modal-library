# custom-modal-library

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/custom-modal-library.svg)](https://www.npmjs.com/package/custom-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-modal-library
```

## Usage

```jsx
import React, { useState } from 'react'

import { CustomModalComponent } from 'custom-modal-library'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
      >
      Show Modal
      </button>
      <CustomModalComponent show={showModal} onClickCloseBtn={hideModal}>
        <h1>Text example</h1>
      </CustomModalComponent>
    </div>
  )
}

export default App

```

## License

MIT © [MathisZerbib](https://github.com/MathisZerbib)
