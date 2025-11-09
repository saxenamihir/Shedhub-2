
import LeftSidebar from './Components/LeftSidebar.jsx';
import Right from './Components/Right.jsx';
import ShedsHeader from './Components/ShedsHeader.jsx';
import Header from './Components/Header.jsx';
import PDP from './Components/PDP.jsx';
import Button from './Components/Button.jsx';
import './App.css';
import LocationResults from './Components/LocationResults.jsx';
import ShedhubBanner from './Components/ShedhubBanner.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <PDP />
      
      {/* Main two-column layout container */}
      <div className="main-two-column-layout"> 
        
        {/* LEFT COLUMN: Search Filters */}
        <div className="left-sidebar-col">
          <LeftSidebar /> 
        </div>
        
        {/* RIGHT COLUMN: Header + Listings */}
        <div className="right-content-wrapper"> 
          <ShedsHeader /> 
          <Right /> 
        </div>
      </div>

      <Button/>
      <LocationResults/>
      <ShedhubBanner/>
      <Footer/>
    </div>
  );
}

export default App; 

