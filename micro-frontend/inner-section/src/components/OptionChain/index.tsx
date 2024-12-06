import styles from "@/styles/global.module.css";
import { useLayoutEffect, useState } from "react";
import OptionCard from "./OptionCard";
import { OptionCardProps } from "@/types/optionChain/OptionCard.types";

const OptionChain = () => {
    const [cards, setCards] = useState<OptionCardProps[]>([])
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/data/optionCardData.json"
        );
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    useLayoutEffect(()=>{

      fetchData();
    },[])
  return <section className={styles.optionChain}>
    <div className={styles.optionCardContainer}>
        {
            cards?.map((card,i)=>{
                return(
                    <OptionCard 
                    key={i}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    />
                )
            })
        }
    </div>
  </section>;
};

export default OptionChain;
