import styled from 'styled-components'

const Div = styled.div`
  grid-area: body;
  background-color: bisque;
`

const Body = ({ children }) => {
  return <Div>{children}</Div>
}

export default Body
