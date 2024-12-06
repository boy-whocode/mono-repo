import styles from "@/styles/global.module.css";
import Button from "@components/commonComponents/Button";
import { FaArrowRight } from "react-icons/fa";


const Insignt = () => {
  const handleClick=()=>{
    alert('Explore feature clicked')
  }
  return (
    <>
      <section className={styles.insigntContainer}>
        <h1 className={styles.insigntContainer__heading}>
          The Ultimate Destination For Stock Market Insight
        </h1>
        <p className={styles.insigntContainer__description}>
          Join 1 million Traders & Investors who trust Nifty Trader for smart
          trading & real-time stock insights.
        </p>
        <Button
          text="Explore Feature"
          varient="outlined"
          type="button"
          onClick={handleClick}
          icon={<FaArrowRight />}
        />
      </section>
    </>
  );
};
export default Insignt;
