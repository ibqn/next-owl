import styled from 'styled-components'
import { useState } from 'react'

import SearchIcon from './glass.svg'

const Form = styled.form`
  width: 100%;
  position: relative;
`

const Input = styled.input`
  width: 100%;

  padding: 7px 45px 7px 15px;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 5px;
  outline-color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0 4px 4px rgb(0 0 0 / 5%);

  font-family: ${({ theme }) => theme.fontFamily};

  font-size: 16px;
  line-height: 1.375;
`

const Button = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;

  width: 30px;
  height: 30px;
  padding: 7px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  /* color: ${({ theme }) => theme.colors.white}; */
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`

const Search = () => {
  const [search, setSearch] = useState('')

  const onSearch = (event) => {
    event.preventDefault()

    console.log('search', search)
  }

  const onChange = ({ target: { value } }) => setSearch(value)

  return (
    <Form>
      <Input value={search} onChange={onChange} placeholder="Поиск..." />
      <Button onClick={onSearch}>
        <SearchIcon />
      </Button>
    </Form>
  )
}

export default Search
