import { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Star from './star.svg'

const StarLine = styled.span`
  display: inline-block;

  ${({ $editable }) =>
    $editable &&
    css`
      cursor: pointer;
    `}

  .ratingWrapper {
    position: relative;
  }

  .errorMessage {
    position: absolute;
    bottom: -20px;
    left: 0;

    color: var(--red);
  }

  .error svg {
    stroke: var(--red);
  }
`

const StyledStar = styled(Star)`
  margin-right: 5px;
  width: 20px;
  height: 20px;

  fill: #e2e2e2;

  ${({ $fill }) =>
    $fill &&
    css`
      fill: ${({ theme }) => theme.colors.primary};
    `}
`

const numberStars = 5

const Rating = ({ stars, setStars }) => {
  const [hover, setHover] = useState(null)

  return (
    <StarLine $editable={!!setStars} onMouseLeave={() => setHover(null)}>
      {Array.from({ length: numberStars }).map((_, index) => {
        const starIndex = setStars && hover ? hover : stars

        return (
          <StyledStar
            key={index}
            $fill={starIndex > index}
            onMouseEnter={() => setHover(index + 1)}
            onClick={() => setStars?.(index + 1)}
            tabIndex={setStars ? 0 : -1}
            onKeyDown={({ code }) => code === 'Space' && setStars?.(index + 1)}
          />
        )
      })}
    </StarLine>
  )
}

Rating.propTypes = {
  // Array.from({ length: numberStars + 1 }, (_, index) => index)
  stars: PropTypes.oneOf([...new Array(numberStars + 1).keys()]).isRequired,
  setStars: PropTypes.func,
}

export { Rating }
