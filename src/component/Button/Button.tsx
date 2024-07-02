import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: Function;
}) => {
  const _onClick = onClick ? onClick : () => {};
  return (
    <button className="custom-button uppercase" onClick={() => _onClick()}>
      {children}
    </button>
  );
};

export default Button;
