import Input from "./Input"
import Bar from "./Bar"

const Section = ({title, onChange, value, max}) => {
  return (
    <>
      <section>
        <div>
          <h1>{title}</h1>
          <Input title={title} onChange={onChange} value={value} />
        </div>
        <Bar max={max} onChange={onChange} value={value}/>
      </section>
      <style jsx>
        {`
          section {
            color: #ACD5D6;
            border: 1px solid #C0CCC9;
            border-radius: 7px;
            padding: 10px;
            margin-bottom: 10px;
          }
          div {
            display: flex;
            margin-bottom: 10px;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}

export default Section;
