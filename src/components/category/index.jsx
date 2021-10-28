import styled from 'styled-components'

import CourseIcon from './courses.svg'

const Div = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 40px;
  gap: 40px;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 1.36;
`

const IconBox = styled.div`
  display: grid;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

const Title = () => (
  <Div>
    <IconBox>
      <CourseIcon />
    </IconBox>

    <H1>Курсы</H1>
  </Div>
)

const Category = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  gap: 30px;
`

const Card = styled.div`
  padding: 30px;
  display: grid;
  grid-gap: 15px;
  gap: 15px;
  align-content: start;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
`

export { Title, Category, Card }
