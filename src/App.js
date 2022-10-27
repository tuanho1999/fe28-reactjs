
import "./App.css";
import Card from "./components/card";
import Head from "./components/header/head";
import Sidebar from "./components/sidebar/sidebar";

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
        <div className="handle-card">
          <div className="container">
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
          </div>
          <div className="container">
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
          </div>
          <div className="container">
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
            <Card status="doing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;