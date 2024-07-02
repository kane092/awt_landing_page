import OutlineBtn from "component/Button/OutlineBtn";

const Steps = () => {
  return (
    <div className="flex flex-col items-center mb-[50px]">
      <p className="primary-text-title mb-[35px]">BEAT THE WOKE IN 3 STEPZ</p>
      <div className="flex flex-col items-center gap-[50px]">
        <OutlineBtn>
          Step 1 - Connect
          <br />
          Wallet
        </OutlineBtn>
        <OutlineBtn classes="w-[316px]">
          Step 2 - Bridge
          <br />
          Now
        </OutlineBtn>
        <OutlineBtn>
          Step 3 - Buy
          <br />
          Now
        </OutlineBtn>
      </div>
    </div>
  );
};

export default Steps;
