import { darken } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background: rgb(45, 45, 45);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  border: 2px solid #F58D1D;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, 'rgb(246, 164, 77)')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 2rem;
    height: 2rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.yellow};
  }
    
  @media (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;

    span:first-child {
      display: none;
    }
  }
`
