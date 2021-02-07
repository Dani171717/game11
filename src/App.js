import Layout from "./containers/Layout/Layout";
import Game from "./containers/game/Game";


function App() {
  return (
    <div className="App">
      <Layout>
        <Game />
      </Layout>
    </div>
  );
}

export default App;
