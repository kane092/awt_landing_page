import { useRecoilState } from "recoil";
import { Modal } from "react-responsive-modal";
import useMainSetting from "hook/useMainSetting";

import Alert from "component/Alert";
import Header from "component/Header";
import Menu from "component/Menu/Menu";
import Navigation from "component/Navigation";
import Steps from "component/Steps";
import TeamMembers from "component/TeamMembers";
import SuccessStory from "component/SuccessStory";
import BrandLogo from "component/BrandLogo";
import Projects from "component/Projects";
import Swap from "component/Swap";

import awt_src from "asset/img/awt.png";

import "react-responsive-modal/styles.css";
import "./App.css";
import { showSwapModalState } from "state/atoms";

function App() {
  useMainSetting();

  const [showSwapModal, setShowSwapModal] = useRecoilState(showSwapModalState);

  return (
    <div className="App">
      <Alert />
      <Menu />
      <div className="3xl:w-[1620px] 3xl:mx-auto">
        <Header />
        <Navigation />
        <Steps />
        <TeamMembers />
        <SuccessStory />
        <BrandLogo />
        <Projects />
        <img src={awt_src} alt="AWT" className="w-[74%] mx-auto" />
      </div>
      <Modal
        open={showSwapModal}
        onClose={() => setShowSwapModal(false)}
        center
        classNames={{ modal: "custom-modal", closeButton: "no-button" }}
      >
        <Swap />
      </Modal>
    </div>
  );
}

export default App;
