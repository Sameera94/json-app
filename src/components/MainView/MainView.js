import React, { useEffect } from 'react';
import styled from "styled-components";
import JsonView from "../JsonView/JsonView";
import { useState } from "react";
import ReactGA from "react-ga4";

const Root = styled.div`
  display: flex;

  > * + * {
    border-left: 1px solid grey;
  }
`

function MainView() {
  const [jsonViews, setJsonViews] = useState([{ id: 0 }, { id: 1 }])

  const addNewView = () => {
    const lastJsonView = jsonViews[jsonViews.length - 1]
    setJsonViews([
      ...jsonViews, {
        id: lastJsonView.id + 1
      }
    ])
  }

  const onCloseView = (index) => {
    setJsonViews(jsonViews.filter(({ id }) => id !== index))
  }

  useEffect(() => {
    ReactGA.event({
      category: "Home Page",
      action: "Home Page View"
    });
  })

  return (
    <Root>
      {
        jsonViews.map((jsonView, index) => 
          <JsonView
            key={jsonView.id}
            jsonView={jsonView}
            showAddButton={index === jsonViews.length - 1}
            showCloseButton={jsonViews.length > 1}
            addNewView={addNewView}
            onCloseView={onCloseView}
          />
        )
      }
    </Root>
  )
}

export default MainView