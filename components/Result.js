
const Result = ({total = 0, persons = 0, tipPercentage = 0}) => {

  total = Number(total)
  tipPercentage = Number(tipPercentage)
  persons = Number(persons)

  const resultCalc = () => {
    const tip = (total * tipPercentage) / 100;
    if (persons === 0) return total

    return (total + tip) / persons;
  }

  const result = resultCalc()
  
  return (
    <>
      <p>Everyone have to pay: {result} </p>
    </>
  )
}

export default Result;
