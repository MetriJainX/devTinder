import {Provider} from "react-redux";
import Body from "./components/Body";
import Profile from "./components/profile";
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";


function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/"> 
     <Routes>

{/* parent route:below are child routes */}
<Route path="/" element={<Body/>}> 
<Route path="/" element={<Feed/>}/> 
{/* it is similar to <Route path="/" element={<Body/>}></Route> */}
<Route path="/login" element={<Login />}/>
<Route path="/profile" element={<Profile/>}/>
</Route>
 
     </Routes>
    </BrowserRouter> 
    </Provider>
    
    </>
  );
}
export default App;    
