import styles from "@/styles/global.module.css";
import { useLayoutEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import Badge from "@components/commonComponents/Badge";
import Button from "@components/commonComponents/Button";


const PricingPlan = () => {
    const [pricingData, setPricindData] = useState<{
      header: { [key: string]: string | any }[];
      body: { [key: string]: string }[];
    }>();
    const fetchData = async () => {
      try {
        const response = await fetch("/data/pricingDataPlans.json");
        const data = await response.json();
        console.log(data,"<=== data")
        setPricindData(data.data)
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    useLayoutEffect(() => {
      fetchData();
    }, []);

    const handlePricingClick=(isFree:boolean)=>{
        if(isFree){
            alert("map route to create free acc")
        }else{
            alert("map route to login to buy")
        }
    }
  return (
    <>
      <section>
        <div className={styles.heading}>
          <h1>Pricing Plan</h1>
        </div>
        <div className={styles.contentWrapper}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                {pricingData?.header?.map((head, i) => {
                  return (
                    <td key={i} className={styles.pricingTable__row}>
                      <div className={styles.pricingTable__head}>
                        <h1>
                          {head.title}
                          {head.hasOwnProperty("sub_title") && (
                            <span className={styles.pricingTable__subtitle}>
                              {head.sub_title}
                            </span>
                          )}
                        </h1>
                        {head.hasOwnProperty("badge") && (
                          <div className={styles.pricingTable__badge}>
                          <Badge text={head.badge} type="outlined" />
                          </div>
                        )}
                      </div>
                      {head.hasOwnProperty("description") && (
                        <p className={styles.pricingTable__description}>
                          {head.description}
                        </p>
                      )}
                      {head.hasOwnProperty("action") && (
                        <Button
                          type="button"
                          text={head.action}
                          varient="primary"
                          onClick={() => {
                            handlePricingClick(head.isFree);
                          }}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {pricingData?.body?.map((row, i) => {
                return (
                  <tr key={i} className={styles.pricingData__body}>
                    {pricingData?.header?.map((col, ind) => {
                      const cellData = row[col.type];
                      const hasDescription = row.hasOwnProperty("description");
                      return (
                        <td key={ind}>
                          <span>
                          {typeof cellData !== "boolean" ? (
                            cellData
                          ) : cellData ? (
                            <div className={styles.pricingData__icon}>
                              <RiVerifiedBadgeFill fill="#04B800"  />
                            </div>
                          ) : (
                            <div className={styles.pricingData__icon}>
                              <RiCloseCircleFill fill="#D80000" />
                            </div>
                          )}
                          </span>
                          {hasDescription &&
                            row.description.hasOwnProperty(col.type) && (
                              <p className={styles.pricingTable__description}>
                                {row.description[col.type]}
                              </p>
                            )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
