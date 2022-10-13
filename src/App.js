import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Component/ErrorPage";
import Home from "./Component/Home";
import Result from "./Component/Result";
import Root from "./Root";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
        element: <Home></Home>,
      },
      {
        path: 'search/:name',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`),
        element: <Result></Result>,
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
