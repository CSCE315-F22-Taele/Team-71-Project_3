import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import InStore from "./pages/InStore";
import Manager from "./pages/Manager";
import ServerCustomer from "./pages/ServerCustomer";
import { useEffect } from "react";

function App() {
  
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/manager":
        title = "";
        metaDescription = "";
        break;
      case "/Link To Server":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ServerCustomer />} />

      <Route path="/manager" element={<Manager />} />

      <Route path="/Link To Server" element={<ServerCustomer />} />
      <Route path="/desktop-2" element={<Manager />} />

    </Routes>
  );
}
export default App;
