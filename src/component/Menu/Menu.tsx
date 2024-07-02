import { useSetRecoilState } from "recoil";
import { showSwapModalState } from "state/atoms";
import OutlineBtn from "component/Button/OutlineBtn";
import MenuItem from "./MenuItem";
import MenuItemMulti from "./MenuItemMulti";

import "./Menu.css";

const Menu = () => {
  const setShowSwapModal = useSetRecoilState(showSwapModalState);
  return (
    <div className="h-[190px] pt-[65px] w-full flex items-center justify-between">
      <div className="flex justify-between xl:ml-[99px] xl:w-[960px]">
        <p className="primary-text text-[18px] font-semibold xl:pr-[100px]">
          Home
        </p>
        <MenuItem title="Vibe" />
        <MenuItemMulti title="Blackpaper" />
        <MenuItem title="MEME Propaganda" />
        <MenuItem title="Anti Woke MEME Generator" />
      </div>
      <div className="xl:pr-[56px]">
        <OutlineBtn children="Buy Now" onClick={() => setShowSwapModal(true)} />
      </div>
    </div>
  );
};

export default Menu;
