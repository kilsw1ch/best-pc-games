import Games from "../components/Games"
import games from "../data/games"

export default function Sale() {
  const freeGames = games.filter(game => game.genre.includes("sale"))
  
  return (
    <div className="main">
      {freeGames.map((game) => (
        <Games key={game.name} {...game} />
      ))}
    </div>
  )
}