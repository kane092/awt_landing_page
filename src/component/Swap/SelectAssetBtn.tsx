import { Asset } from "component/constant/type";

import chevron_bottom_src from "asset/img/chevron-bottom.svg";

const SelectAssetBtn = ({
  asset,
  onChange,
}: {
  asset: Asset | undefined;
  onChange: Function;
}) => {
  return (
    <div className="absolute top-[9px] right-0">
      {asset === undefined ? (
        <button className="no-asset-btn">
          Select token
          <img src={chevron_bottom_src} alt="" className="ml-[12px]" />
        </button>
      ) : (
        <button className="asset-btn">
          {asset.symbol}
          <img src={chevron_bottom_src} alt="" className="ml-[12px]" />
        </button>
      )}
    </div>
  );
};

export default SelectAssetBtn;
