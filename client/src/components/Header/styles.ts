import styled from 'styled-components';

export const Container = styled.header`
  background: #FF7990;
  `;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;   
  
  padding: 1rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: #FFA9CB;
    border: 0;
    padding: 0.6rem 1.5rem;
    border-radius: 0.25rem;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      background: #FCC8D6;
      border-radius: 0.50rem; 
    }
  }
`;