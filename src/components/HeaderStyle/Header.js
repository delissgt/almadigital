// import logo from '../../assets/logo.png';
import logo from '../../assets/logo.png'
// import './HeaderStyle.css';
// import styles from './HeaderStyle.module.css';
// classes could be also styling, classes or whatever

import {styled} from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  
  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

  /*header */
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }

    & h1 {
      font-size: 2.25rem;
    }
  }
`

export default function Header() {

  return (
    <StyledHeader>
      <img src={logo.src} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* todo problems with nextjs */}
      {/*<p className={`${styles.paragraph}`}>A community of artists and art-lovers.</p>*/}
    </StyledHeader>
  );
}
