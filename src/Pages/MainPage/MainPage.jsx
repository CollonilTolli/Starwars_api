import css from "./MainPage.module.scss";
import { useLang } from "../../Hooks/useLang";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Yoda from "../../assets/images/yoda.png"
import Cloud from "../../assets/images/cloud.svg"

const MainPage = () => {
  const textConstants = useLang();
  const titleRef = useRef(null);
  useEffect(() => {
    let div = titleRef.current ? titleRef.current : "";
    div.innerHTML = textConstants.mainPage.title;
  });

  return (
    <main className={css.mainPage}>
      <div className={css.container}>
        <div className={css.infoBlock}>
          <h1 className={css.title} ref={titleRef}> </h1>
          <div className={css.subtitle}>{textConstants.mainPage.subtitle}</div>
          <Link to="/characters/" className={css.btnLink}>
            {textConstants.mainPage.btnText}
          </Link>
        </div>
        <div className={css.imageBlock}>
          <div className={css.cloud}><img draggable={false} src={Cloud} alt="" /></div>
          <div className={css.cloud}><img draggable={false} src={Cloud} alt="" /></div>
          <div className={css.mainImage}><img src={Yoda} draggable={false} alt="" /></div>
          <div className={css.shadow}></div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
