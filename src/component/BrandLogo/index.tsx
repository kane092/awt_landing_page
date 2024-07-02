import brand_1_src from "asset/img/brands/brand1.png";
import brand_2_src from "asset/img/brands/brand2.png";
import brand_3_src from "asset/img/brands/brand3.png";
import brand_4_src from "asset/img/brands/brand4.png";
import brand_5_src from "asset/img/brands/brand5.png";

const BrandLogo = () => {
  return (
    <div className="mb-[165px]">
      <p className="primary-text text-[32px] font-bold mb-[15px] text-center">
        Our Partnaz
      </p>
      <div className="flex w-full justify-between">
        <img src={brand_1_src} alt="Brand 1" />
        <img src={brand_2_src} alt="Brand 2" />
        <img src={brand_3_src} alt="Brand 3" />
        <img src={brand_4_src} alt="Brand 4" />
        <img src={brand_5_src} alt="Brand 5" />
      </div>
    </div>
  );
};

export default BrandLogo;
