import styled from 'styled-components'
import LogoIcon from './logo.svg'
import Link from 'next/link'

const StyledLogo = styled(LogoIcon)`
  width: 159px;
  height: 44px;

  fill: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`

const Logo = () => (
  <Link href="/">
    <a>
      <StyledLogo />
    </a>
  </Link>
)

export default Logo
