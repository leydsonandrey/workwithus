import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"

import "./index.css"
import App from "./App"
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import ErrorPage from "./error-page"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/categorias" />}/>
      <Route path="/categorias" element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="/error-page" element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
