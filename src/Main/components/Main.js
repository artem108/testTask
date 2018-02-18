import React, { Component } from 'react';

const MainComponent = (props) => {
  const { data, clickItem } = props

  return (
    <ul style={{listStyle: 'none'}}>
      {
        data.map((item) => {
        return (
          <li key={item.height}
              onClick={clickItem}
              id={item.url}>
              {item.name}
          </li>
          )
        })
      }
  </ul>
  )
}

export default MainComponent
