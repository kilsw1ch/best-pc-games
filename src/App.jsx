import Header from "./components/Header"
import Games from "./components/Games"
import games from "./data/games"
import {Routes,Route} from "react-router-dom"
import Free from "./pages/free"
import Multiplayer from "./pages/Multiplayer"
import Singleplayer from "./pages/Singleplayer"
import Racing from "./pages/Racing"
import Sale from "./pages/Sale"

export default function App(){
  return(
    <>
      <Header/>
      <Routes>
        <Route
          path="/best-pc-games"
          element={
            <div className="main">
              {games.map((game)=>(
                <Games key={game.name} {...game}/>
              ))}
            </div>
          }
        />
        <Route path="/best-pc-games/Free" element={<Free/>}/>
        <Route path="/best-pc-games/Multiplayer" element={<Multiplayer/>}/>
        <Route path="/best-pc-games/Singleplayer" element={<Singleplayer/>}/>
        <Route path="/best-pc-games/Racing" element={<Racing/>}/>
        <Route path="/best-pc-games/Sale" element={<Sale/>}/>
      </Routes>
    </> 
  )
}