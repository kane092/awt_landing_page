import mail_src from "asset/img/mail.svg";

import "./Alert.css";

const Alert = () => {
  return (
    <div className="absolute top-[-16px] left-0 alert-box">
      <div className="w-full flex items-center justify-end pr-[104px] gap-[16px]">
        <img src={mail_src} alt="mail" width={24} />
        <p className="alert-text">STOP BEING A WOKE CUNT</p>
      </div>
    </div>
  );
};

export default Alert;
