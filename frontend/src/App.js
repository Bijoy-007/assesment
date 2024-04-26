import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/SignIn";
import JobBoard from "./pages/JobBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/jobs",
    element: <JobBoard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
