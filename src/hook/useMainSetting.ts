import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { SettingType, mainSettingState } from "state/atoms";
import { STORAGE_NAME } from "component/constant/constant";

const useMainSetting = () => {
  const [setting, setSetting] = useRecoilState<SettingType>(mainSettingState);
  useEffect(() => {
    const storageSetting = JSON.parse(
      localStorage.getItem(STORAGE_NAME) || "{}"
    );
    if (storageSetting) setSetting(storageSetting);
    else {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(setting));
    }
  }, []);
};

export default useMainSetting;
