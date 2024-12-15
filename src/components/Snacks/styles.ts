import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack {
    position: relative;
    background-color: rgb(45, 45, 45);
    padding: 1.75rem 1.5rem;
    border-radius: 30px;

    span {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      color: white;
      background: rgb(255, 59, 59);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.125rem;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      color: white;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
      color: white;

      @media (max-width: 500px) {
        font-size: 16px;
      }
    }

    div {
      margin-top: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
        color: white;
      }

      button {
        background: #F58D1D;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          background: rgb(246, 164, 77);
        }
      }
    }
  }
`;
