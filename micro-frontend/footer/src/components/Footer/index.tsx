import styles from "@/styles/global.module.css";
import FooterMenu from "./FootetMenu";
import { footerMenu } from "@/utils/constants/footerMenu";
import { useState } from "react";
import { ImagePath } from "@/utils/constants/imagePath";
import Image from "next/image";

const Footer = () => {
      const [formData, setFormData] = useState({
        email: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };
  return (
    <>
      <footer
        className={styles.footer}
        style={{
          backgroundImage: `url(${ImagePath.bg})`,
        }}
      >
        <div className={styles.footer__logo}>
          <Image src={ImagePath.logo} alt="logo" width={155} height={35} />
        </div>
        <div className={styles.footer__container}>
          <div className={styles.footer__helpfullLinks}>
            <FooterMenu data={footerMenu.helpfullLinks} />
          </div>
          <div className={styles.footer__otherLinks}>
            <FooterMenu data={footerMenu.otherLinks} />
          </div>
          <div className={styles.footer__topBrockers}>
            <FooterMenu data={footerMenu.topBrockers} />
          </div>
          <div className={styles.footer__subscribe}>
            <div className={styles.footerMenu}>
              <h3 className={styles.footerMenu__title}>
                Subscribe to our Newsletter
              </h3>
              <p className={styles.footerMenu__desc}>
                Sign up & receive the latest tips via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className={styles.footerMenu__fieldContainer}>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.footerMenu__input}
                    placeholder="Email Address"
                  />
                  <button type="submit" className={styles.btn}>
                    Subscribe
                  </button>
                </div>
              </form>
              <div className={styles.footer__subscribeApps}>
                <div>
                  <button>
                    <Image
                      width={140}
                      height={40}
                      src={ImagePath.playStore}
                      alt="play store"
                    />
                  </button>
                </div>
                <div>
                  <button>
                    <Image
                      width={140}
                      height={40}
                      src={ImagePath.appStore}
                      alt="app store"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer__apps}>
            <div>
              <button>
                <Image
                  width={140}
                  height={40}
                  src={ImagePath.playStore}
                  alt="play store"
                />
              </button>
            </div>
            <div>
              <button>
                <Image
                  width={140}
                  height={40}
                  src={ImagePath.appStore}
                  alt="app store"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
