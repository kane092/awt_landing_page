import FromInput from "./FromInput";

import awt_src from "asset/img/awt.png";
import setting_src from "asset/img/setting.svg";

import "./Swap.css";
import ToInput from "./ToInput";
import ConfirmBtn from "./ConfirmBtn";

const Swap = () => {
  return (
    <>
      <img
        src={awt_src}
        alt="AWT"
        className="mx-auto mt-[150px] mb-[40px]"
        width={650}
        height={650}
      />
      <div className="px-[8px] py-[12px]">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-[#222] text-[15px] font-semibold leading-[24px] font-['Inter']">
            Swap
          </p>
          <button>
            <img src={setting_src} alt="Setting" />
          </button>
        </div>
        <div className="flex flex-col gap-[22px]">
          <FromInput />
          <ToInput />
          <ConfirmBtn />
        </div>
      </div>
    </>
  );
};

export default Swap;
