import styled from 'styled-components'

export const Container = styled.div`
margin: 3rem 5rem 1rem;

  h1{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem 4rem 1rem;
    grid-gap: 2.5rem;
    list-style: none;
  }

  li {
    background: #fff;
    padding: 1.5rem;
    border-radius: 0.50rem;
    position: relative;
  }

  strong {
    display: block;
    color: #41414d;
    margin-bottom: 0.25rem;
  }

  p {
    font-weight: 400;
    color: gray;
  }

  p + strong{
    margin-top: 1.2rem;
  }

  button {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: #fff;
  }
`;