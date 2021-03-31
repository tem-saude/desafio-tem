import logoPng from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Container, Content } from "./styles";

export function Header () {
  return (
    <Container>
      <Content>
        <img src={logoPng} alt=""/>
        <Link to="/agendar">
          <button type="button">
            Agendar
          </button>
        </Link>
      </Content>
    </Container>
  );
}