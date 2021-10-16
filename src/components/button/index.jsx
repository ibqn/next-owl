import styled, { css } from 'styled-components'
import Arrow from './arrow.svg'

const Button = styled.button`
  display: inline-block;

  padding: 10px;

  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  border: none;
  border-radius: 5px;

  font-size: 14px;

  svg {
    width: 6px;
    height: 10px;

    margin-left: 10px;
    fill: ${(props) => props.theme.colors.white};
    ${({ down }) =>
      down &&
      css`
        transition: all 0.2s;
        transform: rotate(90deg);
      `}
  }
`

const BaseButton = ({ children, className, arrow, down }) => (
  <Button down={down} className={className}>
    {children}
    {arrow && <Arrow />}
  </Button>
)

const PrimaryButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`
const GhostButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.black};

  border: 1px solid ${(props) => props.theme.colors.primary};
  background: none;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};

    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.black};
  }
`

export { PrimaryButton, GhostButton }
