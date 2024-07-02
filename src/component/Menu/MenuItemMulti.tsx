import down_arrow_src from "asset/img/down-arrow.svg";

const MenuItemMulti = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-[5px] items-start">
      <div className="flex items-center">
        <p className="secondary-text text-[18px] font-semibold uppercase">
          {title}
        </p>
        <img src={down_arrow_src} alt="down arrow" className="grayscale" />
      </div>
    </div>
  );
};

export default MenuItemMulti;
