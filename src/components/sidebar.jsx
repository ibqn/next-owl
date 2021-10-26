import styled from 'styled-components'
import Logo from 'components/logo'
import Search from 'components/search'
import Menu from 'components/menu'

const Div = styled.div`
  grid-area: sidebar;

  display: grid;
  align-content: start;
  gap: 20px;

  @media (max-width: 765px) {
    display: none;
  }
`

const Sidebar = () => (
  <Div>
    <Logo />
    <Search />
    <Menu />
  </Div>
)

export default Sidebar
