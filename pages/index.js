import react from 'react'
import Section from '../components/Section';
import Result from '../components/Result';
import useInputValue from '../hooks/useInputValue'

const App = () => {
  const total = useInputValue(0)
  const tipPercentage = useInputValue(0)
  const persons = useInputValue(0)
  
  return (
    <>
      <div>
        <h1>Friends Bill Calculator</h1>
        <h3>Easily calculate how much have to pay each one!</h3>
        <Section title="Total" max={10000} {...total} />
        <Section title="Persons" max={100} {...persons} />
        <Section title="Tip" max={100}{...tipPercentage} />
        <Result total={total.value}  persons={persons.value} tipPercentage={tipPercentage.value} />
      </div>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
            background: #FFFFFF;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <style jsx>
        {`
          div {
            margin: 30px 30px;
            color: #ACD5D6;
          }
          h3 {
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  )
}

export default App;