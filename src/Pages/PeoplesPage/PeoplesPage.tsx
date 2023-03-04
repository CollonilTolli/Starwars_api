import { useDispatch, useSelector } from "react-redux/es/exports";
import Select from "react-select";
import _ from "lodash";
import { languageActive } from "../../redux/reducers/langReducer";
import { useLang } from "../../Hooks/useLang";
import usePagination from "../../Hooks/usePagination";
import css from "./PeoplesPage.module.scss";
import langBtn from "../../assets/images/langBtn.png";
import { useQuery } from "../../Hooks/useQuery";
import Preloader from "../../Components/Preloader/Preloader";
import cn from "classnames";
import { useState, useEffect } from "react";
import Modal from "../../Components/Modal/Modal";
import "./SelectFilter.scss";

const PeoplesPage = () => {
  const lang = useSelector((state: any) => state.lang.language);
  const isFetching = useSelector((state: any) => state.fetching.fetching);
  const dispatch = useDispatch();
  const textConstants = useLang();
  const items: any = useQuery({ apiKey: "people" });
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const optionsArray: any = [];
  items?.results.map((element: any) => optionsArray.push(element.eye_color));
  const uniqEye = _.uniq(optionsArray);
  const [selects, setSelects] = useState(uniqEye || "all");

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: items?.results.length,
  });

  useEffect(() => {
    const options = [];
    options.push(
      uniqEye.map(
        (elem: any) => (elem = eval(`({value:"${elem}", label:"${elem}"})`))
      )
    );
    const all = { value: "all", label: "all" };
    setSelects([all, ...options[0]]);
  }, [isFetching, items]);
  const [changeEye, setChangeEye] = useState("all");
  const onSelected = (newValue: any) => {
    setChangeEye(newValue.value);
  };
  return (
    <>
      {!isFetching ? (
        <Preloader />
      ) : (
        <>
          {openModal && (
            <Modal item={modalContent} setOpenModal={setOpenModal} />
          )}
          <main className={css.PeoplesPage}>
            <div className={css.container}>
              <p className={css.language}>
                {textConstants.charactersPage.lang}: {lang}
              </p>
              <h2>
                {items?.results.length} {textConstants.charactersPage.title}
              </h2>
              <div className={css.content}>
                <div className={css.filters}>
                  <span>color eye:</span>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    options={selects}
                    onChange={onSelected}
                  />
                </div>
                <div className={css.items}>
                  {items?.results
                    .slice(firstContentIndex, lastContentIndex)
                    .map(
                      (el: any, index: number) =>
                        (el.eye_color === changeEye || changeEye === "all") && (
                          <div
                            className={css.item}
                            key={index}
                            onClick={() => {
                              setOpenModal(true);
                              setModalContent(el);
                            }}
                          >
                            <div className={css.name}>{el.name}</div>
                            <div className={css.params}>
                              <div className={css.height}>
                                <div className={css.circle}>{el.height}</div>
                                <div className={css.label}>Height</div>
                              </div>
                              <div className={css.mass}>
                                <div className={css.circle}>{el.mass}</div>
                                <div className={css.label}>Mass</div>
                              </div>
                            </div>
                            <div className={css.tags}>
                              {el.birth_year && (
                                <div className={cn(css.tag, el.birth_year !== 'unknown' ? css.ornge : css.d_none)}>
                                  {el.birth_year}
                                </div>
                              )}
                              {el.gender && (
                                <div
                                  className={cn(
                                    css.tag,
                                    el.gender === "male"
                                      ? css.green
                                      : el.gender === "female"
                                      ? css.purple
                                      : el.gender === "hermaphrodite" ?
                                      css.yellow
                                      : css.d_none
                                  )}
                                >
                                  {el.gender}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                    )}
                </div>
              </div>

              <div className={css.pagination}>
                <button
                  onClick={prevPage}
                  className={cn(css.pagination_btn, page === 1 && css.disabled)}
                >
                  &larr;
                </button>
                <button
                  onClick={() => setPage(1)}
                  className={cn(css.pagination_btn, page === 1 && css.disabled)}
                >
                  1
                </button>
                {gaps.before ? "..." : null}
                {/* @ts-ignore */}
                {gaps.paginationGroup.map((el) => (
                  <button onClick={() => setPage(el)} key={el}>
                    {el}
                  </button>
                ))}
                {gaps.after ? "..." : null}
                <button
                  onClick={() => setPage(totalPages)}
                  className={cn(
                    css.pagination_btn,
                    page === totalPages && css.disabled
                  )}
                >
                  {totalPages}
                </button>
                <button
                  onClick={nextPage}
                  className={cn(
                    css.pagination_btn,
                    page === totalPages && css.disabled
                  )}
                >
                  &rarr;
                </button>
              </div>
            </div>
          </main>
          <button
            className={css.langBtn}
            onClick={() => dispatch(languageActive())}
          >
            <img src={langBtn} alt="" />
          </button>
        </>
      )}
    </>
  );
};

export default PeoplesPage;
