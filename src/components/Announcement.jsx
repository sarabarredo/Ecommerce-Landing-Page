import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #84956e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Envío gratis a partir de 25€
    </Container>
  )
}

export default Announcement;