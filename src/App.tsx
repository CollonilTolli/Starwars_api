import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PeoplesPage from "./Pages/PeoplesPage/PeoplesPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route
            path="/characters/"
            element={
              <>
                <Header />
                <PeoplesPage />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
