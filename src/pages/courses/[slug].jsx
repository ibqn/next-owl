import { useRouter } from 'next/router'
import { withLayout } from 'components/layout'
import { request, gql } from 'graphql-request'
import { getGraphqlEndpoint } from 'utils'

const Course = () => {
  const router = useRouter()
  return <div>course {router.query.slug}</div>
}

export default withLayout(Course)

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
const endpoint = getGraphqlEndpoint()

export const getStaticPaths = async () => {
  const data = await request(endpoint, GET_QUERY)

  const paths = data?.libraries?.flatMap(({ pages }) =>
    pages?.map(({ slug }) => ({ params: { slug } }))
  )

  console.log('paths', paths)

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await request(endpoint, GET_QUERY)

  // console.log(JSON.stringify(data, undefined, 2))

  return {
    props: {
      menu: data?.libraries,
    },
  }
}
