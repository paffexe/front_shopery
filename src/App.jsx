import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/signin/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
