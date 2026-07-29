import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./root/Root"
import { Landing } from "./root/Main/Landing/Landing"
import { Stream } from "./root/Main/Stream/Stream"
import { useReducer } from 'react'
import {HeadContext} from './HeadContext'
import { headReducer, initialHeadState } from "./headReducer";

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
    const [ headState, headDispatch ] = useReducer( headReducer, initialHeadState)
  
  return (
    <div>
      <HeadContext.Provider value={[headState, headDispatch]}>
        <RouterProvider router={router}/>
      </HeadContext.Provider>
    </div>
  );
}

export default App;
