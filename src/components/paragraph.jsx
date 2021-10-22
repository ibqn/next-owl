import styled from 'styled-components'

const P = styled.p`
  margin: 0;
`

const P1 = styled(P)`
  font-size: 18px;
  line-height: 1.6;
`

const P2 = styled(P)`
  font-size: 16px;
  line-height: 1.5;
`

const P3 = styled(P)`
  font-size: 14px;
  line-height: 1.7;
`

export { P1, P2, P3 }
