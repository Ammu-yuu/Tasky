
import "./App.css";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import Home from "./components/Home";
import TaskMain from "./components/TaskMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
      <BrowserRouter>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<TaskMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
