import dynamic from "next/dist/shared/lib/app-dynamic";
import {calculateInvestmentResults, formatter} from "../../util/investment";

export default function TableResultCalculator({userInput}) {
  // console.log('user', userInput)
  const resultsData = calculateInvestmentResults(userInput)
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  console.log("---", resultsData)
  return(
      <div>
        {dynamic.length > 0 &&
            <table id='result'>
              <thead>
              <tr>
                <th scope='col'>Year</th>
                <th scope='col'>Investment Value</th>
                <th scope='col'>Interest (Year)</th>
                <th scope='col'>Total Interest</th>
                <th scope='col'>Invested Capital</th>
              </tr>
              </thead>
              <tbody>
              {
                resultsData.map(result => {
                  const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                  const totalAmountInvested = result.valueEndOfYear - totalInterest;

                  return(
                  <tr key={result.year} >
                    <td>{result.year}</td>
                    <td>{ formatter.format(result.valueEndOfYear)}</td>
                    <td>{ formatter.format(result.interest)}</td>
                    <td>{ formatter.format(totalInterest)}</td>
                    <td>{ formatter.format(totalAmountInvested)}</td>
                  </tr>
                  )
              })
              }

              </tbody>
            </table>

        }

      </div>
  )


}