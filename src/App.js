import logo from './logo.svg';
// import './App.css';
import Game from './Component/Game';
import { Box } from "@chakra-ui/react"

//   background-color: #282c34;

function App() {
  return (
    <Box bg='#1a2336' h='100vh' w='100vw'>

      <Game />
    </Box>
  );
}

export default App;
