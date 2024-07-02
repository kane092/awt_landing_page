import Button from "component/Button/Button";
import OutlineBtnGray from "component/Button/OutlineBtnGray";

import right_arrow_src from "asset/img/right-arrow.svg";
import brand_1_src from "asset/img/brands/brand1.png";
import brand_2_src from "asset/img/brands/brand2.png";
import { useSetRecoilState } from "recoil";
import { showSwapModalState } from "state/atoms";

import brand_3_src from "asset/img/brands/brand3.png";

import "./Header.css";

const Header = () => {
  const setShowSwapModal = useSetRecoilState(showSwapModalState);
  return (
    <div className="flex mb-[110px]">
      <div className="w-[50%]">
        <div className="ml-[-35px]">
          <p className="uppercase primary-text text-[60px] font-bold ml-[-10px] mb-[47px]">
            Token Price
          </p>
          <div className="flex items-center gap-[17px] mb-[16px]">
            <div className="bg-primary w-[19px] h-[4px] rounded-[8px]" />
            <p className="primary-font">Crowd Fucking</p>
          </div>
          <div className="mb-[95px]">
            <p className="primary-text text-[60px] font-bold mb-[-14px]">
              Were here to say
            </p>
            <p className="primary-text text-[60px] font-bold">
              fuck you to the woke agenda
            </p>
          </div>
          <div className="flex gap-[29px] mb-[98px]">
            <Button onClick={() => setShowSwapModal(true)}>
              <p>Buy & Get rich</p>
              <img src={right_arrow_src} alt="right arrow" />
            </Button>
            <OutlineBtnGray text="Make MEME" />
          </div>
          <div>
            <p className="secondary-text text-[18px] font-medium mb-[10px]">
              Ourt Partners
            </p>
            <div className="flex items-center justify-between mr-[80px]">
              <img src={brand_1_src} alt="Brand 1" width={180} />
              <img src={brand_2_src} alt="Brand 2" width={180} />
              <img src={brand_3_src} alt="Brand 3" width={180} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="w-[50vw] h-full">
          <div className="header h-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
