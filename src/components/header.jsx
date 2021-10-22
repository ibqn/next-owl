import styled from 'styled-components'
import Logo from './logo'

const Div = styled.div`
  grid-area: header;
  display: none;

  margin: 15px;

  @media (max-width: 765px) {
    display: flex;
  }
`

const Header = () => {
  return (
    <Div>
      <Logo />
    </Div>
  )
}

export default Header
