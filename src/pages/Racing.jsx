import Games from "../components/Games"
import games from "../data/games"

export default function Racing() {
  const freeGames = games.filter(game => game.genre.includes("racing"))
  
  return (
    <div className="main">
      {freeGames.map((game) => (
        <Games key={game.name} {...game} />
      ))}
    </div>
  )
}