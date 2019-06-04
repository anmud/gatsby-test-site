import React from "react"
import Sidebar from '../components/sidebar'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from 'gatsby'



const SidebarWrapper = styled.div`
margin: 0;
padding: 0;
width: 240px;
background-color: #f1f1f1;
position: fixed;
height: 100%;
overflow: auto;
a{
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    margin-left: 0;
}


h3{
    padding: 4px;
    text-decoration: none;
    margin-left: 0;
}
}
  
`
const ContentWrapper = styled.div`
    margin: 0;
    font-family: "Lato", sans-serif;
    margin-left: 240px;
    padding: 1px 16px;
    height: 1000px;

    div.content {
        margin-left: 10px;
        margin-top: 100px;
        padding: 1px 16px;
        height: 1000px;
      }

`

export default ({ children }) => {
  return <div >
    <SidebarWrapper>
     <Sidebar></Sidebar>
    </SidebarWrapper>
      
    <ContentWrapper>
        {children}
    </ContentWrapper>
    
  </div>
}