import { gamesData } from "./gamesData"

class Queries {
  setDataToLocalStorage = () => {
    // var config = {
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // }
    // axios
    //   .get("http://hck.re/nGaeKB", config)
    //   .then(response => console.log(response))
    // due to cors policy problems,
    // have converted the csv into array of JSON and using it
    const hasLoadedDataPreviously =
      window.localStorage.getItem("gamesData") !== null
    if (!hasLoadedDataPreviously) {
      window.localStorage.setItem("gamesData", JSON.stringify(gamesData))
    }
  }
  getGamesData = () => {
    return JSON.parse(window.localStorage.getItem("gamesData"))
  }
  getGameDetail = rank => {
    const games = JSON.parse(window.localStorage.getItem("gamesData"))
    return games.find(game => game.Rank == rank)
  }
}

const queries = new Queries()
export { queries, Queries }
export default queries
