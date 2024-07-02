import { atom } from "recoil";
import { MAIN_SETTING, SHOW_SWAP_MODAL } from "component/constant/constant";

export interface SettingType {
  slippage: number;
}

const initSetting: SettingType = {
  slippage: 5,
};

export const mainSettingState = atom({
  key: MAIN_SETTING,
  default: initSetting,
});

export const showSwapModalState = atom({
  key: SHOW_SWAP_MODAL,
  default: true,
});
