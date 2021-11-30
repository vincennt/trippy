import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import HotelPage from "./pages/HotelPage"
import NotFound from "./pages/NotFound"
import Favorites from "./pages/Favorites"
import Room from "./pages/Room"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/hotels/:city" element={<Hotels />} />
        <Route path="/hotels/:city/:id" element={<HotelPage />} />
        <Route path="/hotels/:id/rooms" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App