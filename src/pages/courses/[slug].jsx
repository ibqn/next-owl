import { useRouter } from 'next/router'
import { withLayout } from 'components/layout'
import { request, gql } from 'graphql-request'

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

export const getStaticPaths = async () => {
  const endpoint = 'http://localhost:3000/api/graphql'
  const data = await request(endpoint, GET_QUERY)

  const paths = data?.libraries?.flatMap((library) =>
    library?.pages?.map((page) => ({
      params: { slug: page.slug },
    }))
  )

  // console.log('paths', paths)

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const endpoint = 'http://localhost:3000/api/graphql'

  const data = await request(endpoint, GET_QUERY)

  // console.log(JSON.stringify(data, undefined, 2))

  return {
    props: {
      menu: data?.libraries,
    },
  }
}
