import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./LazyLoadPic.css";

interface LazyLoadPicProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyLoadPic: FC<LazyLoadPicProps> = ({ src, alt, className }) => {
  return <LazyLoadImage effect="blur" src={src} alt={alt} className={className} />;
};
