import profile_picture_src from "asset/img/profile-picture.svg";
import star_src from "asset/img/star.svg";

const Sold = () => {
  return (
    <div>
      <p className="color-primary text-[50px] font-semibold mb-[8px]">
        24,553,852.24 Tokens Sold
      </p>
      <p className="primary-text text-[18px] font-medium uppercase mb-[61px]">
        TOTAL FUCK YOUS TO THE WOKE AGENDA TOKENS SOLD
      </p>
      <div className="relative flex gap-[19px]">
        <img
          src={profile_picture_src}
          alt="Profile"
          className="relative top-[-3px] left-0"
        />
        <div>
          <div className="flex items-center mb-[7px]">
            <p className="primary-text text-[18px] font-medium uppercase w-[180px]">
              Some guy
            </p>
            <div className="flex items-center gap-[4px]">
              <img src={star_src} alt="Star" />
              <img src={star_src} alt="Star" />
              <img src={star_src} alt="Star" />
            </div>
          </div>
          <div className="flex gap-[40px]">
            <p className="color-primary text-[14px] font-['OpenSans'] font-bold">
              5,000,000 <br />
              tokens
            </p>
            <ul className="list-disc secondary-text font-['OpenSans'] text-[14px] font-normal">
              <li className="w-[280px]">
                I WANT TO BE ABLE TO SAY FAG NIGGER JEW AS A JOKE WITHOUT BEING
                CANCELLED
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sold;
