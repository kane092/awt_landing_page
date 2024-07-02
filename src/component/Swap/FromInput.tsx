import { useState } from "react";

import SwapInputBox from "./SwapInputBox";
import SwapInput from "./SwapInput";
import { Asset } from "component/constant/type";
import SelectAssetBtn from "./SelectAssetBtn";

const FromInput = () => {
  const [fromAmount, setFromAmount] = useState("0");
  const [fromAsset, setFromAsset] = useState<Asset | undefined>(undefined);
  return (
    <SwapInputBox>
      <p className="text-[#7D7D7D] text-[13px] font-['Inter'] font-semibold leading-[20px] mb-[-3px] relative z-10">
        You pay
      </p>
      <div className="relative">
        <SwapInput amount={fromAmount} onChange={setFromAmount} />
        <SelectAssetBtn asset={fromAsset} onChange={setFromAsset} />
      </div>
    </SwapInputBox>
  );
};

export default FromInput;
