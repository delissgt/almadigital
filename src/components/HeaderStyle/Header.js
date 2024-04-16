// import logo from '../../assets/logo.png';
import logo from '../../assets/logo.png'
import './HeaderStyle.css';
// import styles from './HeaderStyle.module.css';
// classes could be also styling, classes or whatever

export default function HeaderStyle() {

  return (
    <header>
      <img src={logo.src} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className='paragraph'>A community of artists and art-lovers.</p>
      {/* todo problems with nextjs */}
      {/*<p className={`${styles.paragraph}`}>A community of artists and art-lovers.</p>*/}
    </header>
  );
}
