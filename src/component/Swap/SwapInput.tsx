const SwapInput = ({
  amount,
  onChange,
}: {
  amount: string;
  onChange: Function;
}) => {
  const changeValue = (value: string) => {
    onChange(value);
  };
  return (
    <input
      type="text"
      className="swap-input"
      value={amount}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
};

export default SwapInput;
