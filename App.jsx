import Men from "./pages/forMen";
import WoMen from "./pages/forWomen"
import Katalog from "./pages/katalog";
import './css/header.css'
import './css/video.css'
import {Routes,NavLink,Route, BrowserRouter} from "react-router-dom"
function App(){
    return(
       
        <>
         
     
          
          <Routes>
              <Route path="/" element={<WoMen/>}/>
              <Route path="/men" element={<Men/>}/>
              <Route path="/katalog" element={<Katalog/>}/>  
          </Routes>
          </>
        
    )
}
export default App;