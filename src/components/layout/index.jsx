import Body from 'components/body'
import { Footer } from 'components/footer'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 230px minmax(320px, 1200px) auto;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
  gap: 40px 30px;

  grid-template-areas:
    '. header header .'
    '. sidebar body .'
    'footer footer footer footer';

  @media (max-width: 765px) {
    grid-template-columns: minmax(320px, 1fr);
    grid-template-areas:
      'header'
      'body'
      'footer';

    gap: 10px;
  }
`

const Layout = ({ children }) => {
  return (
    <Root>
      <Header />

      <Sidebar />
      <Body>{children}</Body>

      <Footer />
    </Root>
  )
}

const withLayout = (Component) => (props) =>
  (
    <Layout>
      <Component {...props} />
    </Layout>
  )

export { Layout, withLayout }
