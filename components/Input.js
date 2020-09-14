const Input = ({title, onChange, value}) => {
  return (
    <>
      <input
        type="text"
        name={title}
        placeholder={title}
        value={value}
        onChange={onChange}
      />
      <style jsx>
        {`
          input {
            border: 1px solid #C0CCC9;
            border-radius: 7px;
            background: transparent;
            padding: 5px;
            color: #C0CCC9;
            font-weight: 600;
            outline: none;
          }
        `}
      </style>
    </>
  );
}

export default Input;
