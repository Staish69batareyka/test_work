import './index.css'
import Welcome from "./components/Welcome/Welcome.tsx";
import {UploadPhoto} from "./components/UploadPhoto/UploadPthoto.tsx";
import {Survey} from "./components/Survey/Survey.tsx";
import Results from "./components/Results/Results.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
function App() {

  return (
      <>

          <BrowserRouter>
              <ScrollToTop></ScrollToTop>
              <Routes>
                  <Route path="/" element={<Welcome/>}></Route>
                  <Route path="/upload-photo" element={<UploadPhoto/>}></Route>
                  <Route path="/survey" element={<Survey/>}></Route>
                  <Route path="/results" element={<Results/>}></Route>
              </Routes>
          </BrowserRouter>

          {/*<Welcome></Welcome>*/}
          {/*<UploadPhoto></UploadPhoto>*/}
          {/*<Survey></Survey>*/}
          {/*<Results></Results>*/}
      </>
  )
}

export default App
