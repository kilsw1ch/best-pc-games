import Games from "../components/Games"
import games from "../data/games"

export default function Multiplayer() {
  const freeGames = games.filter(game => game.genre.includes("multiplayer"))
  
  return (
    <div className="main">
      {freeGames.map((game) => (
        <Games key={game.name} {...game} />
      ))}
    </div>
  )
}