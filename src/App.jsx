import Menubar from "./Menubar"
import CarouselSlide from "./CarouselSlide"
import CarouselCard from "./CarouselCard"
import Login from "./Login"
import Dashboard from "./Dashboard"
import UserDetails from "./UserDetails";
import TodosDetails from "./TodosDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      {/* <Menubar />
     <CarouselSlide />
     <CarouselCard /> */}

      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/todos/:id" element={<TodosDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
