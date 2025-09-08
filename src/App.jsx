import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';

export const App = () => {
  return (
    <div className='overflow-x-hidden'>
       <Home/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);