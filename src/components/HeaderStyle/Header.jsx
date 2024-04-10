// import logo from '../../assets/logo.png';
import logo from '../../assets/logo.png'

export default function HeaderStyle() {
  return (
    <header>
      <img src={logo.src} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
