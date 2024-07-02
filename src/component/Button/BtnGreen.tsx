import { ReactNode } from "react";

import "./Button.css";

const BtnGreen = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <button className={`green-btn ${className}`}>{children}</button>;
};

export default BtnGreen;
