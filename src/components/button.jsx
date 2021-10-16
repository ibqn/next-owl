import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;

  box-sizing: border-box;
  padding: 10px;

  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  border: none;
  border-radius: 5px;

  font-size: 14px;

  svg {
    fill: ${(props) => props.theme.colors.white};
  }
`

const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`

export { PrimaryButton }
