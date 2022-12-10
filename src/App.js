import { Routes ,Route } from 'react-router-dom';
import './component/Page_Landing.scss';
import Page_Aboutme from "./component/Page_Aboutme";
import Page_Landing from './component/Page_Landing';
import Page_Project1 from "./component/Page_Project1";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Page_Project3_Cinema from './component/Page_Project3_Cinema';
import Page_Project3_Natlib from './component/Page_Project3_Natlib';
import Page_Project3_Toystore from './component/Page_Project3_Toystore';
import Page_Project3_Illustration from './component/Page_Project3_Illustration';

function App() {
  return (
    <>
      <div className='bg'>
      <Navbar/>
      <Routes>
            <Route exact path ='/' element = {<Page_Landing/>}/>
            <Route exact path ='/aboutme' element = {<Page_Aboutme/>}/>
            <Route exact path ='/shareo' element = {<Page_Project1/>}/>
            <Route exact path ='/travbudd' element = {<Page_Project1/>}/>
            <Route exact path ='/archilens' element = {<Page_Project1/>}/>
            <Route exact path ='/natlibth' element = {<Page_Project3_Natlib/>}/>
            <Route exact path ='/cinema' element = {<Page_Project3_Cinema/>}/>
            <Route exact path ='/toystore' element = {<Page_Project3_Toystore/>}/>
            <Route exact path ='/illustration' element = {<Page_Project3_Illustration/>}/>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
