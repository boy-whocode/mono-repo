import styles from "@/styles/global.module.css";
import { ImagePath } from "@/utils/imagePath";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Button from "@/components/commonComponents/Button";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    console.log("I am clicked");
    alert("free trial clicked");
  };
  const handlePlayVideo = () => {
    if (videoRef.current) {
      isPlaying ? videoRef?.current?.pause() : videoRef?.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner__img}>
          <img src={ImagePath.ellipse} width={"100%"} alt="ellipse" />
        </div>
        <div className={styles.bannerContainer}>
          {/* description section */}
          <section
            className={styles.bannerContainer__leftSection}
            style={{ zIndex: 10 }}
          >
            <h1 className={styles.bannerContainer__heading}>
              Stock Screening Simplifed!
            </h1>
            <p className={styles.bannerContainer__description}>
              Find Winning Stock Faster with Nifty Trader's Advanced Stock
              Screening Tool
            </p>
            <Button
              text={"Free Trial"}
              type={"button"}
              onClick={handleClick}
              varient={"bold"}
            />
          </section>
          {/* video section */}
          <aside className={styles.bannerContainer__videoSection}>
            <div className={styles.bannerContainer__videoPlayButton}>
              <button type="button" onClick={handlePlayVideo}>
                {isPlaying ? (
                  <FaPause style={{ margin: "auto" }} />
                ) : (
                  <FaPlay style={{ margin: "auto" }} />
                )}
              </button>
            </div>
            <div className={styles.bannerContainer__videoContainer}>
              <video ref={videoRef} loop>
                <source src={ImagePath.sampleVideo} type="video/mp4" />
              </video>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default Banner;
