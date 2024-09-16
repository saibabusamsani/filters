import Container from "./components/container/container";
import { BrowserRouter , Route, Routes} from 'react-router-dom';

import "./app.css"
import Resume from "./components/Resume/resume";
import Profile from "./components/Resume/profile";
import CV from "./components/Resume/cv";
function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container/>}>
        
      </Route>
      <Route path="/resume" element={<Resume/>}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="cv" element={<CV/>}/>
        
      </Route>

        
    </Routes>
  </BrowserRouter>
  )
}
export default App;