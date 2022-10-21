import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';
import './App.css';

function App() {

  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5} y={10} />
      <Fragment />
      <Container>
        <h2>Este é filho do container!</h2>
      </Container>
    </div>
  )
}

export default App;