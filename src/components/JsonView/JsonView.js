import React, { useRef } from 'react';
import Header from "./Header"
import styled from "styled-components";

const Root = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
`

const TextArea = styled.textarea`
  /* border: '1px solid black'; */
  /* width: '500px';  */
  /* height: '98vh'; */
  height: 100%;
  border: none;
  resize: none;
  padding: 4px;
`


function JsonView(props) {
  const { addNewView, className, data } = props
  const txtRef = useRef(null)

  const onFormatJSON = () => {
    const jsonvalue =  JSON.parse(txtRef.current.value)
    txtRef.current.value = JSON.stringify(jsonvalue, null, 2)
  }

  return (
    <Root className={className}>
      <Header
        addNewView={addNewView}
        onFormatJSON={onFormatJSON}
        data={data}
      />
      <TextArea
        ref={txtRef}
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        rows="5"
        placeholder='Json here...'
      />
    </Root>
  )
}

export default JsonView