import { useEffect, useState, useRef } from "react";

import NavBox from "./NavBox";

import vr_glasses_src from "asset/img/vr-glasses.svg";
import book_src from "asset/img/book.svg";
import video_src from "asset/img/video.svg";
import doctor_bag_src from "asset/img/doctor-bag.svg";
import clothes_src from "asset/img/clothes.svg";
import transformation_src from "asset/img/transformation.svg";

import "./Navigation.css";

interface NavList {
  src: string;
  alt: string;
  text: string;
}

const navList: NavList[] = [
  {
    src: vr_glasses_src,
    alt: "Vr glasses",
    text: "Only 2 genders",
  },
  {
    src: book_src,
    alt: "Book",
    text: "Saying the word gay",
  },
  {
    src: video_src,
    alt: "Video",
    text: "Fuck cancel culture",
  },
  {
    src: doctor_bag_src,
    alt: "Doctor bag",
    text: "All lives matter",
  },
  {
    src: clothes_src,
    alt: "Clothes",
    text: "Men in mens sports",
  },
  {
    src: transformation_src,
    alt: "Transformation",
    text: "Fuck vegans",
  },
  {
    src: vr_glasses_src,
    alt: "Vr glasses",
    text: "Only 2 genders",
  },
  {
    src: book_src,
    alt: "Book",
    text: "Saying the word gay",
  },
  {
    src: video_src,
    alt: "Video",
    text: "Fuck cancel culture",
  },
  {
    src: doctor_bag_src,
    alt: "Doctor bag",
    text: "All lives matter",
  },
  {
    src: clothes_src,
    alt: "Clothes",
    text: "Men in mens sports",
  },
  {
    src: transformation_src,
    alt: "Transformation",
    text: "Fuck vegans",
  },
  {
    src: vr_glasses_src,
    alt: "Vr glasses",
    text: "Only 2 genders",
  },
  {
    src: book_src,
    alt: "Book",
    text: "Saying the word gay",
  },
  {
    src: video_src,
    alt: "Video",
    text: "Fuck cancel culture",
  },
  {
    src: doctor_bag_src,
    alt: "Doctor bag",
    text: "All lives matter",
  },
  {
    src: clothes_src,
    alt: "Clothes",
    text: "Men in mens sports",
  },
  {
    src: transformation_src,
    alt: "Transformation",
    text: "Fuck vegans",
  },
];

const useRefDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

const NavigationBar = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const divRef = useRef<HTMLDivElement>(null);
  const dimensions = useRefDimensions(divRef);
  useEffect(() => {
    switch (dimensions.width) {
      case 1620:
        setTotalPage(Math.floor(navList.length / 6));
        break;
      default:
        setTotalPage(1);
    }
  }, [dimensions]);

  return (
    <div>
      <div
        className="flex justify-start flex-nowrap 3xl:gap-[32px] overflow-hidden mb-[54px]"
        ref={divRef}
      >
        {navList.map((each: NavList, index: number) => (
          <NavBox key={index} src={each.src} alt={each.alt} text={each.text} />
        ))}
      </div>
      <div className="flex gap-[20px] items-center justify-center">
        {[...Array(totalPage).keys()].map((each: number) => (
          <button
            key={each}
            className={`h-[10px] rounded-full ${
              each + 1 === page
                ? "bg-[#FF7468] w-[76px]"
                : "bg-[#EEEEEE] w-[35px]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
