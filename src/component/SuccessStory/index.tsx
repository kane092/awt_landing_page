import BtnGreen from "component/Button/BtnGreen";
import chevron_src from "asset/img/chevron.svg";
import awt_1_src from "asset/img/awt_1.png";
import Sold from "./Sold";

const SuccessStory = () => {
  return (
    <div className="mb-[80px]">
      <p className="primary-font uppercase mb-[24px]">Token</p>
      <p className="primary-text-title uppercase mb-[78px]">
        This isnt a hate token, its a I’ll say what I want token
      </p>
      <div className="flex w-full items-center justify-between mb-[103px]">
        <p className="primary-text-content">
          We dont hate, we dont cause violence, jsut wanna say waht we want.
        </p>
        <BtnGreen className="flex justify-center">
          <div className="flex gap-[17px] items-center mt-[10px]">
            <p className="text-white text-[18px] text-medium">
              FUCK SOME SHIT UP
            </p>
            <img src={chevron_src} alt="Chevron" />
          </div>
        </BtnGreen>
      </div>
      <div className="flex">
        <div className="w-[50%] relative">
          <img
            src={awt_1_src}
            alt="AWT"
            width={708}
            height={747}
            className="absolute left-[-12px] top-[-115px]"
          />
        </div>
        <div className="w-[50%]">
          <p className="primary-text text-[32px] font-bold mb-[30px]">
            Buy the token, show them the cant control you fuck your woke agenda
          </p>
          <p className="primary-text-content mb-[89px]">
            lets face it, every facet of your life is controlled, make anti woke
            memes print some fucken checks niggas . go woke go broke. Call a fat
            bitch a fat bitch and get rich.
          </p>
          <Sold />
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
