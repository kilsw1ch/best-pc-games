import Header from "./components/Header"
import Games from "./components/Games"
import games from "./data/games"
import { Routes, Route, Link } from "react-router-dom"
import GameDetail from "./pages/GameDetail"
import Free from "./pages/free"
import Multiplayer from "./pages/Multiplayer"
import Singleplayer from "./pages/Singleplayer"
import Racing from "./pages/Racing"

export default function App(){
  return(
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              {games.map((game) => (
                <Games key={game.name} {...game} />
              ))}
            </div>
          }
        />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/Free" element={<Free />} />
        <Route path="/Multiplayer" element={<Multiplayer />} />
        <Route path="/Singleplayer" element={<Singleplayer />} />
        <Route path="/Racing" element={<Racing />} />
      </Routes>
    </> 
  )
}