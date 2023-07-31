import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyLoadPicProps {
  imageSrc: string;
  imageAlt: string;
}

export const LazyLoadPic: FC<LazyLoadPicProps> = ({ imageSrc, imageAlt }) => {
  return <LazyLoadImage effect="blur" src={imageSrc} alt={imageAlt} />;
};
