import moneyImg from '../../assets/investment-calculator-logo.png';

export default function HeaderCalculator({title}) {
  return(
      <header id='header'>
        <img src={moneyImg.src} alt="investment calculator"/>
        <h1>{title}</h1>
      </header>
  )
}