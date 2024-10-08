import {
  // Route,
  // Routes,
  // ScrollRestoration,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./layout/root";

function App() {
  const router = createBrowserRouter([
   
   
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    }

   
  ]);
  return (
      <RouterProvider  router={router}/>
  );
}

export default App;
