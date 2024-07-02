import "./Button.css";

const OutlineBtnGray = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: Function;
}) => {
  const _onClick = onClick ? onClick : () => {};
  return (
    <button className="outline-btn-gray" onClick={() => _onClick()}>
      {text}
    </button>
  );
};

export default OutlineBtnGray;
