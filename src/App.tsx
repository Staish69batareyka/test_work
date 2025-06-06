import style from "./Core.module.scss"
import './index.css'
import Welcome from "./components/Welcome/Welcome.tsx";
import {UploadPhoto} from "./components/UploadPhoto/UploadPthoto.tsx";
import Survey from "./components/Survey/Survey.tsx";
import Ranger from "./components/Survey/Ranger.tsx";
import Results from "./components/Results/Results.tsx";
function App() {

  return (
      <>

          {/*<Welcome></Welcome>*/}
          {/*<UploadPhoto></UploadPhoto>*/}
          <Survey></Survey>
          {/*<Results></Results>*/}
      </>
  )
}

export default App
