import styled from 'styled-components'
import Link from 'next/link'
import { request, gql } from 'graphql-request'

import { H1 } from 'components/h-tags'
import { Title, Category, Card } from 'components/category'
import { P1, P2, P3 } from 'components/paragraph'
import Head from 'next/head'
import { withLayout } from 'components/layout'
import { getGraphqlEndpoint } from 'utils'

const Container = styled.section`
  /* min-height: 100vh; */
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
`

const Main = styled.main`
  /* padding: 5rem 0; */
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`

const Home = ({ menu }) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next OWL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title />
        {/*  {menu && JSON.stringify(menu, undefined, 2)} */}
        <Category>
          {menu?.libraries.map(({ branch, pages }) => (
            <Card key={`${branch}`}>
              <H1>{branch}</H1>

              {pages?.map(({ slug, category: { name } }) => (
                <Link href={slug}>
                  <a> {name}</a>
                </Link>
              ))}
            </Card>
          ))}
        </Category>
      </Main>
    </Container>
  )
}

export default withLayout(Home)

const GET_QUERY = gql`
  query getLibraries {
    libraries {
      branch
      pages {
        slug
        id
        title
        category {
          name
        }
      }
    }
  }
`

export const getStaticProps = async () => {
  const endpoint = getGraphqlEndpoint()
  console.log('endpoint', endpoint)

  const data = await request(endpoint, GET_QUERY)
  // console.log(JSON.stringify(data, undefined, 2))

  return {
    props: {
      menu: data,
    },
  }
}
