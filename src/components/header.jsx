import styled from 'styled-components'

const Div = styled.div`
  grid-area: header;
  display: none;
  background-color: beige;

  @media (max-width: 765px) {
    display: flex;
  }
`

const Header = () => {
  return <Div>header</Div>
}

export default Header
