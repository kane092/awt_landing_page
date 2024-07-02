import { ReactNode } from "react";

import "./Button.css";

const OutlineBtn = ({
  children,
  onClick,
  classes,
}: {
  children: ReactNode;
  onClick?: Function;
  classes?: string;
}) => {
  const _onClick = onClick ? onClick : () => {};
  const _classes = classes || "w-[206px]";
  return (
    <button className={`outline-btn ${_classes}`} onClick={() => _onClick()}>
      {children}
    </button>
  );
};

export default OutlineBtn;
