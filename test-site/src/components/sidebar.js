import React from "react"
import {Link} from 'gatsby'



const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default () => (
    <div >
      
        <Link to={`/`} >
          <h3 >ANDREESSEN HOROWITZ</h3>
        </Link>
        <ul >
          <h3>Intro</h3>
          <ListLink to={`/about/`}>About This Site</ListLink>
          <h3>Guides</h3>
          <ListLink to={`/history/`}>A Little History</ListLink>
          <h3>Where to Next?</h3>
          <ListLink to={`/where-to-next/`}>Where to Next?</ListLink>
        </ul>
    </div>
  )