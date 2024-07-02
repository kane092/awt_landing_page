import { ReactNode } from "react";

const SwapInputBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full rounded-[16px] bg-[#F9F9F9] p-[16px]">
      {children}
    </div>
  );
};

export default SwapInputBox;
