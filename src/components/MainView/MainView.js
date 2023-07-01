import React from 'react';
import styled from "styled-components";
import JsonView from "../JsonView/JsonView";
import { useState } from "react";

const Root = styled.div`
  display: flex;

  > * + * {
    border-left: 1px solid grey;
  }
`

function MainView() {
  const [jsonViews, setJsonViews] = useState([{ id: 1 }, { id: 2 }])

  const addNewView = () => {
    const lastJsonView = jsonViews[jsonViews.length - 1]
    setJsonViews([
      ...jsonViews, {
        id: lastJsonView.id + 1
      }
    ])
  }

  return (
    <Root>
      {
        jsonViews.map(jsonView => 
          <JsonView
            key={jsonView.id}
            data={jsonView}
            addNewView={addNewView}
          />
        )
      }
    </Root>
  )
}

export default MainView