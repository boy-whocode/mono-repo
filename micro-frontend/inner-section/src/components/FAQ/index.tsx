import styles from "@/styles/global.module.css";
import { useLayoutEffect, useState } from "react";
import FaqDropdown from "./FaqDropdown";
import { FaqPropsTypes } from "@/types/faq/FaqDropdown.type";

const FAQ = () => {
    const [FaqData, setFaqData] = useState<FaqPropsTypes[]>([])
    const fetchData = async () => {
      try {
        const response = await fetch("/data/faqData.json");
        const data = await response.json();
        console.log(data, "<=== data");
        setFaqData(data.data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    useLayoutEffect(() => {
      fetchData();
    }, []);
  return (
    <>
      <section className={styles.faq}>
        <div className={styles.heading}>
          <h1>FAQ</h1>
        </div>
        <div className={styles.faqContentWrapper}>
            {
                FaqData?.map((faq,i)=>{
                    return (
                      <FaqDropdown
                        key={i}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    );
                })
            }
        </div>
      </section>
    </>
  );
};

export default FAQ;
