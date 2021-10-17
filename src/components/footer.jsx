import styled from 'styled-components'
import { format } from 'date-fns'

const Root = styled.footer`
  grid-area: footer;

  display: grid;
  grid-template-columns: 1fr auto auto;
  font-size: 16px;
  line-height: 120%;
  gap: 10px 40px;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px 30px;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }

  a:hover {
    color: ${(props) => props.theme.colors.grayLight};
  }
`

export const Footer = () => {
  return (
    <Root>
      <span>Next OWL © {format(new Date(), 'yyyy')} Все права защищены</span>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </Root>
  )
}
