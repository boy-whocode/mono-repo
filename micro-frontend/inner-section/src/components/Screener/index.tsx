import styles from "@/styles/global.module.css";
import { ImagePath } from "@/utils/imagePath";
import ImageCarousel from "@components/commonComponents/ImageCarousel";

const Screener = () => {
    const Images = [
        ImagePath.property1,
        ImagePath.property2,
        ImagePath.property3,
        ImagePath.property4,
        ImagePath.property5,
        ImagePath.property6,
    ];
  return (
    <>
      <div className={styles.screener}>
        <ImageCarousel images={Images}/>
      </div>
    </>
  );
};

export default Screener;
