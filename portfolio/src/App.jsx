import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./router";



function App() {

  const router = createBrowserRouter(Root)

  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
