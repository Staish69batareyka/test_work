import style from "./Core.module.scss"
import './index.css'
import Welcome from "./components/Welcome/Welcome.tsx";
import {UploadPhoto} from "./components/UploadPhoto/UploadPthoto.tsx";
import Survey from "./components/Survey/Survey.tsx";
function App() {

  return (
      <>
          {/*<Welcome></Welcome>*/}
          {/*<UploadPhoto></UploadPhoto>*/}
          <Survey></Survey>
      </>
  )
}

export default App
