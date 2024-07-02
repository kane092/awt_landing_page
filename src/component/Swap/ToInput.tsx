import { useState } from "react";

import SwapInputBox from "./SwapInputBox";
import SwapInput from "./SwapInput";
import { Asset } from "component/constant/type";
import SelectAssetBtn from "./SelectAssetBtn";

const ToInput = () => {
  const [toAmount, setToAmount] = useState("0");
  const [toAsset, setToAsset] = useState<Asset | undefined>(undefined);
  return (
    <SwapInputBox>
      <p className="text-[#7D7D7D] text-[13px] font-['Inter'] font-semibold leading-[20px] mb-[-3px] relative z-10">
        You receive
      </p>
      <div className="relative">
        <SwapInput amount={toAmount} onChange={setToAmount} />
        <SelectAssetBtn asset={toAsset} onChange={setToAsset} />
      </div>
    </SwapInputBox>
  );
};

export default ToInput;
