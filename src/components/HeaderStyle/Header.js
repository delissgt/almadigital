// import logo from '../../assets/logo.png';
import logo from '../../assets/logo.png'
// import './HeaderStyle.css';
// import styles from './HeaderStyle.module.css';
// classes could be also styling, classes or whatever

// import {styled} from 'styled-components';
// import 'tailwindcss'
import 'tailwindcss/tailwind.css'


export default function Header() {

  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo.src} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* todo problems with nextjs */}
      {/*<p className={`${styles.paragraph}`}>A community of artists and art-lovers.</p>*/}
    </header>
  );
}
