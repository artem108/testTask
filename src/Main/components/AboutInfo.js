import React, { Component } from 'react';

const AboutInfo = (props) => {
  const { charcter } = props

  return (
    <section>
    <h1>Name: {charcter.name}</h1>
    <h1>Height: {charcter.height}</h1>
    <h1>Mass{charcter.mass}</h1>
    <h1>Eye color: {charcter.eye_color}</h1>
  </section>
  )
}

export default AboutInfo
