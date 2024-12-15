import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    .header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1.5rem;
      background: rgb(45, 45, 45);
      border-radius: 10px;
      margin-bottom: 2rem;
      box-shadow: 0 5px 6px rgba(0, 0, 0, 0.56); 

      .logoPrincipal {
        width: 50px;
        margin-right: 1rem;
      }

      .imgLogo {
        width: 200%;
      }

      .titulo {
        color: rgb(245, 141, 29);
        font-size: 1.2rem;
        position: relative;
        margin-left: 70px;

        h3 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .direcao {
          margin: 5px 0 0;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;
      padding-top: 5rem;

      .header {
        align-items: center;
        text-align: center;

        .logoPrincipal {
          margin-bottom: 1rem;
        }
      }
    }

    @media (max-width: 400px) {
      .header {
        .titulo {
          font-size: 1.5rem;
          
          h3 {
            font-size: 1.5rem; 
          }

          .direcao {
            font-size: 1.20rem;
          }
        }
      }
    }
  }
`;
