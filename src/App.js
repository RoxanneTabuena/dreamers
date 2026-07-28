import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./root/Root"
import { Landing } from "./root/Main/Landing/Landing"
import { Feed } from "./root/Main/Feed/Feed"

import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route
          index
          element={<Landing />}
        />
        <Route
          path='/:tag'
          element={<Feed />}
        />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
