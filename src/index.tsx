import { lazy } from "solid-js";
import { MountableElement, render } from "solid-js/web";
import { Router, Routes, Route, Link } from "solid-app-router";

import "./global.scss";

const Index = lazy(() => import("./routes/index"));
// const Historical = lazy(() => import("./routes/historical"));
// const Modern = lazy(() => import("./routes/modern"));
// const NotFound = lazy(() => import("/routes/error"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        {/*<Route path="/historical" element={<Historical />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/*all" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

render(
  () => (
    <>
      <div className="content">
        <Router>
          <App />
        </Router>
      </div>
    </>
  ),
  document.getElementById("root") as MountableElement
);
