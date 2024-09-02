import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'
import Viewevent from './pages/Viewevent'
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
      <Route path="/delete/:id" element={<Delete/>}></Route>
      <Route path="/event/:id" element={<Viewevent/>}></Route>
    </Routes>

    </>
  )
}

export default App
