import styled from 'styled-components';

export const Section03Wrap = styled.section`
  padding: 200px 300px;
  display : flex;
  flex-direction: column;
`;

export const Section03Content = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 80px;
      flex-direction : row;

      img {
          width: 50%;
          padding : 50px;
      }

      div {
          margin-left: 80px;

          p {
              color: #737373;
          }

          .tage {
              margin-bottom: 20px;
              font-weight: 600;
          }

          h2 {
              font-size: 30px;
              font-weight: 600;
              line-height: 1.5;
              margin-bottom: 20px;
          }
      }

      &.right {
          margin-right: 80px;
      }
`