import { useState, useRef, useEffect } from "react";
import styles from "@/styles/global.module.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__inner}
        ref={carouselRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className={styles.carousel__item} key={index}>
            <img
              className={styles.carousel__image}
              src={src}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
