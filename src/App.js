import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./root/Root"
import { Landing } from "./root/Main/Landing/Landing"
import { Stream } from "./root/Main/Stream/Stream"
import { useReducer } from 'react'
import {MenuContext} from './MenuContext'
import { menuReducer, initialMenuState } from "./menuReducer";

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
          element={<Stream />}
        />
  </Route>
))

function App() {
    const [ menuState, menuDispatch ] = useReducer( menuReducer, initialMenuState)
  
  return (
    <>
      <MenuContext.Provider value={[menuState, menuDispatch]}>
        <RouterProvider router={router}/>
      </MenuContext.Provider>
    </>
  );
}

export default App;
