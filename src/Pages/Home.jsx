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
          <p>This open source contribution was done by the <b>Atanu Nayak</b></p>
        
        </div>
      </div>
    </Container>



    </>
  )
}

export default Home


const Container = styled.div`
    background-color: #222;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    color: whitesmoke;

    div, p, b, h1{
      color: inherit;
    }
`