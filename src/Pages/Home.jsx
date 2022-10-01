import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <>
    <Container>
      <div className="row">
        <div className="col">
          <h1>Home</h1>
        </div>
        <div>
          <p>Home page content</p>
        
        </div>
      </div>
    </Container>



    </>
  )
}

export default Home


const Container = styled.div`
    background-color: #1f2225;
`