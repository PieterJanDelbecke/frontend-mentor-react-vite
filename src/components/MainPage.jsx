import React from 'react'
import styled from '@emotion/styled'
import NavBar from './NavBar'

const Container = styled.div`
    width: 1920px;
    height: 1080px;
    border: 1px red solid;
    margin: 0 auto;
`

const MainPage = (props) => {
  return (
    <Container>
        <NavBar />
    </Container>
  )
}

export default MainPage
