import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Tag = styled.span`
  /* display: inline-block; */

  /* box-sizing: border-box; */
  margin-right: 5px;

  border-radius: 20px;

  ${(props) =>
    props.size === 's' &&
    css`
      padding: 5px 10px;

      font-size: 12px;
      line-height: 12px;
    `};

  ${(props) =>
    props.size === 'm' &&
    css`
      padding: 5px 10px;

      font-size: 14px;
      line-height: 14px;
    `};

  ${(props) =>
    props.color === 'ghost' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.grayLight};
    `}

  ${(props) =>
    props.color === 'red' &&
    css`
      color: ${(props) => props.theme.colors.white};
      background: #de0000;

      font-weight: bold;
    `};

  ${(props) =>
    props.color === 'grey' &&
    css`
      color: ${(props) => props.theme.colors.white};
      background: #51648c;

      font-weight: bold;
    `};

  ${(props) =>
    props.color === 'green' &&
    css`
      color: ${(props) => props.theme.colors.green};
      background-color: ${(props) => props.theme.colors.greenLight};

      font-weight: bold;
    `};

  ${(props) =>
    props.color === 'primary' &&
    css`
      color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
      background: none;
    `};
`

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['ghost', 'red', 'grey', 'green', 'primary']),
  size: PropTypes.oneOf(['m', 's']),
}

Tag.defaultProps = {
  size: 's',
  color: 'ghost',
}

export { Tag }
