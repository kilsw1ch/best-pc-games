import Games from "../components/Games"
import games from "../data/games"

export default function Singleplayer() {
  const freeGames = games.filter(game => game.genre.includes("singleplayer"))
  
  return (
    <div className="main">
      {freeGames.map((game) => (
        <Games key={game.name} {...game} />
      ))}
    </div>
  )
}