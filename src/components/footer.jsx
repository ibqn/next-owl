import styled from 'styled-components'

const Root = styled.footer`
  grid-area: footer;
  background-color: burlywood;
  display: grid;
  padding: 25px 30px;
`

export const Footer = () => {
  return <Root>footer</Root>
}
