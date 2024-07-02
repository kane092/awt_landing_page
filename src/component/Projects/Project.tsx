import stacks_of_coins_src from "asset/img/stacks-of-coins.svg";
import calendar_silhouette_src from "asset/img/calendar-silhouette.svg";
import profile_picture_src from "asset/img/profile-picture.svg";
import star_src from "asset/img/star.svg";

const Project = ({
  src,
  title,
  progress,
  totalRaised,
  left,
  name,
  stars,
  campagin,
  region,
}: {
  src: string;
  title: string;
  progress: string;
  totalRaised: string;
  left: string;
  name: string;
  stars: number;
  campagin: number;
  region: string;
}) => {
  return (
    <div className="project">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="w-[380px] h-[166px] bg-cover bg-center rounded-t-[14px] mb-[24px]"
      />
      <div className="m-[18px]">
        <p className="color-primary text-[18px] font-bold uppercase mb-[16px]">
          FUN
        </p>
        <p className="primary-text text-[20px] font-bold mb-[20px] h-[60px]">
          {title}
        </p>
        <div className="progress-bar mb-[25px]">
          <div className="active" style={{ width: `${progress}` }} />
        </div>
        <div className="flex items-center gap-[20px] mb-[16px]">
          <img src={stacks_of_coins_src} alt="Stacks of coins" />
          <p className="primary-text font-['OpenSans'] text-[16px] font-normal leading-[28px]">
            Total Raised $ {totalRaised}
          </p>
        </div>
        <div className="flex items-center gap-[20px] mb-[47px]">
          <img src={calendar_silhouette_src} alt="Callender silhouette" />
          <p className="primary-text font-['OpenSans'] text-[16px] font-normal leading-[28px]">
            {left} Days left
          </p>
        </div>
        <div className="relative flex gap-[19px]">
          <img
            src={profile_picture_src}
            alt="Profile"
            className="relative top-[-3px] left-0"
          />
          <div>
            <div className="flex items-center mb-[7px]">
              <p className="primary-text text-[18px] font-medium mr-[10px]">
                {name}
              </p>
              <div className="flex items-center gap-[4px]">
                {[...Array(stars).keys()].map((each: number) => (
                  <img key={each} src={star_src} alt="Star" />
                ))}
              </div>
            </div>
            <div className="flex gap-[33px]">
              <p className="color-primary text-[14px] font-['OpenSans'] font-bold">
                {campagin} Campagin
              </p>
              <ul className="list-disc secondary-text font-['OpenSans'] text-[14px] font-normal">
                <li>{region}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
