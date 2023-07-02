import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 6px;
  box-sizing: border-box;
  background-color: #C0C0C0;
  border-bottom: 1px solid grey;
`

const Input = styled.input`
  text-align: center;
  background: none;
  border: none;
  width: 40%;
  font-weight: bold;
  
  &:focus {
    outline: none;
  }
`

const ActionWrapper = styled.div`
  display: flex;

  > * + * {
    margin-left: 4px;
  }
`

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border: none;
  background: none;
  border: 1px solid black;
  border-radius: 4px;

  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
`

const CloseButton = styled(Button)`
  > * {
    rotate: 45deg;
  }
`

const FormatButton = styled(Button)`
  padding: 3px 6px;
`

function Header(props) {
  const { jsonView, addNewView, onFormatJSON, onCloseView, showAddButton, showCloseButton } = props
  const [heading, setHeading] = useState('')

  return (
    <Root>
      <FormatButton onClick={onFormatJSON}>Format</FormatButton>
      <Input
        type="text"
        value={heading}
        placeholder="_ _ _ _ _ _ _ _"
        onChange={(e) => setHeading(e.target.value)}
      />
      <ActionWrapper>
        {showCloseButton &&
          <CloseButton onClick={() => onCloseView(jsonView.id)}>
            <svg height="14px" width="14px" id="Layer_1" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
            </svg>
          </CloseButton>
        }
        {showAddButton &&
          <Button onClick={() => addNewView()}>
            <svg height="14px" width="14px" id="Layer_1" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
            </svg>
          </Button>
        }
      </ActionWrapper>
    </Root>
  )
}

export default Header