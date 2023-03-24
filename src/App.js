import About from "components/container/about";
import NoCodePlatform from "components/container/nocodeplatform";
import Privacypolicy from "components/container/section/privacy-policy";
import TermsConditon from "components/container/terms-condition";
import "library/styles/index.scss";
import Load from "load";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/container/contact-us";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Load />} />
          <Route path="about" element={<About />} />
          <Route path="nocodeplatform" element={<NoCodePlatform />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="terms-condition" element={<TermsConditon />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
