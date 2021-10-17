import styled from 'styled-components'

const Div = styled.div`
  grid-area: sidebar;

  @media (max-width: 765px) {
    display: none;
  }
`

const Sidebar = () => {
  return <Div>sidebar</Div>
}

export default Sidebar
