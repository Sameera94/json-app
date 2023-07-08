import React, { useRef } from 'react';
import Header from "./Header"
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
`

const TextArea = styled.textarea`
  height: 100%;
  border: none;
  resize: none;
  padding: 4px;

  &:focus {
    outline: none;
  }
`


function JsonView(props) {
  const { addNewView, onCloseView, className, jsonView, showAddButton, showCloseButton } = props
  const txtRef = useRef(null)

  const onFormatJSON = () => {
    if (txtRef.current.value) {
      const jsonvalue =  JSON.parse(txtRef.current.value)
      txtRef.current.value = JSON.stringify(jsonvalue, null, 2)
    }
  }

  return (
    <Root className={className}>
      <Header
        addNewView={addNewView}
        onCloseView={onCloseView}
        showAddButton={showAddButton}
        showCloseButton={showCloseButton}
        onFormatJSON={onFormatJSON}
        jsonView={jsonView}
      />
      <TextArea
        ref={txtRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows="5"
        placeholder='Json here...'
      />
    </Root>
  )
}

export default JsonView