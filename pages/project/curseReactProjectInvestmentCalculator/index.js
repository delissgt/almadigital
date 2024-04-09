import { useState } from 'react';

import './index.css';
import HeaderCalculator from "../../../src/components/HeaderCalculator";
import UserInputCalculator from "../../../src/components/UserInputCalculator";
import TableResultCalculator from "../../../src/components/TableResultCalculator";

export default function curseReactProjectInvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput)=> {
      return {
        ...prevUserInput,
        // Add + symbol for force convert string to integer type value (newValue now type integer)
        [inputIdentifier]: +newValue,
      }
    })
  }

  const inputIsValid = userInput.duration >= 1;

  return (
      <>
        <HeaderCalculator title="React Investment Calculator"/>
        <UserInputCalculator userInput={userInput} onChange={handleChange}/>
        {!inputIsValid && (<p className='center'>Please enter a duration greater than zero.</p>)}
        {inputIsValid && <TableResultCalculator userInput={userInput} />}
      </>


  )
}