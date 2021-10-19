import { useRouter } from 'next/router'
import { withLayout } from 'components/layout'

const Course = () => {
  const router = useRouter()
  return <div>course {router.query.slug}</div>
}

export default withLayout(Course)
