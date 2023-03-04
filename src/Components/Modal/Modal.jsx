import css from "./Modal.module.scss";
import cn from "classnames";
import Male from "./../../assets/images/male.png";
import FeMale from "./../../assets/images/female.png";
import Any from "./../../assets/images/any.png";

const Modal = ({ item, setOpenModal }) => {
  return (
    <div className={css.modal}>
      <div className={css.modal_container}>
        <div className={css.modal_content}>
          <div className={css.closeBtn} onClick={() => setOpenModal(false)} />
          <div className={css.photo}>
            <img
              src={
                item.gender === "male"
                  ? Male
                  : item.gender === "female"
                  ? FeMale
                  : Any
              }
              alt={item.gender}
            />
            <div className={css.tags}>
              {item.birth_year && (
                <div className={cn(css.tag, item.birth_year !== 'unknown' ? css.ornge : css.d_none)}>{item.birth_year}</div>
              )}
              {item.gender && (
                <div
                  className={cn(
                    css.tag,
                    item.gender === "male"
                    ? css.green
                    : item.gender === "female"
                    ? css.purple
                    : item.gender === "hermaphrodite" ?
                    css.yellow
                    : css.d_none
                  )}
                >
                  {item.gender}
                </div>
              )}
            </div>
          </div>
          <div className={css.info}>
            <div className={css.name}>{item.name}</div>
            <div className={css.userinfo}>
              {item.hair_color && (
                <div className={cn(css.tag, css.blue)}>
                  hair color: {item.hair_color}
                </div>
              )}
              {item.skin_color && (
                <div className={cn(css.tag, css.green)}>
                  skin color: {item.skin_color}
                </div>
              )}
              {item.eye_color && (
                <div className={cn(css.tag, css.purple)}>
                  eye color: {item.eye_color}
                </div>
              )}
            </div>
            <div className={css.params}>
              <div className={css.height}>
                <div className={css.circle}>{item.height}</div>
                <div className={css.labitem}>Height</div>
              </div>
              <div className={css.mass}>
                <div className={css.circle}>{item.mass}</div>
                <div className={css.labitem}>Mass</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
