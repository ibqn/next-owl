import styled from 'styled-components'

const P = styled.p`
  margin: 0;
`

const P1 = styled(P)`
  font-size: 18px;
  line-height: 29px;
`

const P2 = styled(P)`
  font-size: 16px;
  line-height: 24px;
`

const P3 = styled(P)`
  font-size: 14px;
  line-height: 24px;
`

export { P1, P2, P3 }
