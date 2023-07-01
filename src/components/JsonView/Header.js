import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  background-color: lightgray;
  border-bottom: 1px solid grey;
`

const Input = styled.input`
  text-align: center;
  background: none;
  border: none;
  width: 40%;
  font-weight: bold;
`

function Header(props) {
  const { addNewView, onFormatJSON } = props
  const [heading, setHeading] = useState('')

  return (
    <Root>
      <button onClick={onFormatJSON}>Format</button>
      <Input
        type="text"
        value={heading}
        placeholder="_ _ _ _ _ _ _"
        onChange={(e) => setHeading(e.target.value)}
      />
      <button onClick={() => addNewView()}>+</button>
    </Root>
  )
}

export default Header