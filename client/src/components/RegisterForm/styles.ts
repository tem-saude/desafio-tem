import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  margin: 5rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
border-radius: 8px;
padding: 2.5rem 3.5rem;
background: #FF7990;

  h2 {
    padding: 0 0 2rem 5rem;
    color: #fff;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: var(--background);

    font-weight: 400;
    font-size: 1rem; 
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    font-size: 1rem;
    height: 4rem;

    color: #fff;
    background: #FFA9CB;

    margin-top: 1rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.25rem;

    font-weight: 400;
    font-size: 1rem; 

    transition: 0.3s;

    &:hover {
      background: #FCC8D6;
      border-radius: 0.50rem; 
    }
  }
`;