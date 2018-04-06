import React from 'react'
import Link from 'gatsby-link'
import OpticsMaze from '../components/OpticsMaze'

const OpticsMazePage = () => (
  <div>
    <h1>
      Optics Maze Activity
    </h1>
    <div style={{marginTop: 10, marginBottom: 20}}>
      This activity builds on your understanding of mirrors and light from the <Link to={"/optics"}>optics lesson.</Link>
    </div>
    <OpticsMaze />
  </div>
);

export default OpticsMazePage;
