import "./App.css";
import Card from "./components/card";
import Head from "./components/header/head";
import Sidebar from "./components/sidebar/sidebar";
import Pagination from "./components/pagination/foot";
import Text from "./components/form/text";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./components/counter";


function App() {
  return (
    <div className="container-parents">
      
      <div className="handle-head">
        <Head />
      </div>

      <div className="container-display">
        <div className="handle-sidebar">
          <Sidebar />
        </div>
        {/* <div>
          <Text />
        </div> */}
        {/* <div className="handle-card">
          <div className="container">
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
          </div>
          <div className="container">
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
          </div>
          <div className="container">
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
            <Card status="NEW"/>
          </div>
        </div> */}
        
        <Routes>
          <Route path="/Home" element={<Card />} />
          <Route path="/Form" element={<Text />} />
        </Routes>
        {/* <Counter/> */}
      
      </div>
      <div className="footer">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
