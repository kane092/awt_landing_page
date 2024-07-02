import ellipse_src from "asset/img/ellipse.svg";

const NavBox = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) => {
  return (
    <div className="nav-box">
      <img
        src={ellipse_src}
        alt="Ellipse"
        className="absolute top-[33px] left-[103px]"
      />
      <img src={src} alt={alt} className="mt-[53px] mb-[30px] relative z-10" />
      <p className="text-black text-[18px] font-['Poppins'] font-medium uppercase">
        {text}
      </p>
    </div>
  );
};

export default NavBox;
