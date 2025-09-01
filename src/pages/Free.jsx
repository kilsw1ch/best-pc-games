import Games from "../components/Games"
import games from "../data/games"

export default function Free() {
  const freeGames = games.filter(game => game.price === "Free")
  
  return (
    <div className="main">
      {freeGames.map((game) => (
        <Games key={game.name} {...game} />
      ))}
    </div>
  )
}