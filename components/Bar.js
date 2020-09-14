const Bar = ({max, value, onChange}) => {
  return (
    <>
      <div>
        <input type="range" min="0" max={max} value={value} onChange={onChange} />
      </div>
      <style jsx>
        {`
          input {
            height: calc(40px - 2px);
            border: 1px solid #C0CCC9;
            background: #ACD5D6;
            border-radius: 7px;
            outline: none;
            width: calc(100% - 12px);
            padding: 0 5px;
          }
          input::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: absolute;
            bottom: calc(50% - 12.5px);
            border-radius: 7px;
            width: 30px;
            height: 25px;
            background: #ACD5D6;
            border: 2px solid white;
          }
          input::-moz-range-thumb {
            -webkit-appearance: none;
            position: absolute;
            bottom: calc(50% - 12.5px);
            border-radius: 7px;
            width: 30px;
            height: 25px;
            background: #ACD5D6;
            border: 2px solid white;
          }
          input::-ms-thumb {
            -webkit-appearance: none;
            position: absolute;
            bottom: calc(50% - 12.5px);
            border-radius: 7px;
            width: 30px;
            height: 25px;
            background: #ACD5D6;
            border: 2px solid white;
          }
          input::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            position: relative;
            height: 40%;
            background: #47a0b5;
            border-radius: 7px;
            outline: none;
            width: 98%;
          }
          input::-moz-range-track {
            -webkit-appearance: none;
            position: relative;
            height: 40%;
            background: #47a0b5;
            border-radius: 7px;
            outline: none;
            width: 98%;
          }
          input::-ms-track {
            -webkit-appearance: none;
            position: relative;
            height: 40%;
            background: #47a0b5;
            border-radius: 7px;
            outline: none;
            width: 98%;
          }
        `}
      </style>
    </>
  );
}

export default Bar;
