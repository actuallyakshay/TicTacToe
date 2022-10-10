import {
  Heading,
  Container,
  Box,
  Grid,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

// import "../App.css"

import "../App.css";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initValue = ["", "", "", "", "", "", "", "", ""];

export default function Game() {
  const [val, setVal] = useState(initValue);
  const [isX, setX] = useState(false);

  const handleClick = (value) => {
    let s = [...val];
    s[value] = isX ? "X" : "o";
    setVal(s);
    setX(!isX);
  };

  const handleClear = () => {
    setVal(initValue);
  };

  useEffect(() => {
    let winner = calculateWinner();
    if (winner) {
      alert(`WOOOHOOOO !! ${winner} has won the game`);
      setVal(initValue);
    }
  }, [val]);

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (val[a] && val[a] === val[b] && val[a] === val[c]) {
        return val[a];
      }
    }
    return null;
  }

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading mt="10" fontFamily="Gemunu Libre" letterSpacing="7px" as="i">
        {" "}
        Tic Tac Toe
      </Heading>
      <Grid id="board" mt="10" overflow="hidden">
        {arr.map((elem, i) => {
          return (
            <>
              <Box
                display="flex"
                border="3px solid white"
                justifyContent="center"
                fontSize="60px"
                h="100px"
                alignItems="center"
                onClick={() => handleClick(i)}
                _hover={{ transform: "scale(.8)", transformOrigin: "50% 50%" }}
                transition="transform .5s"
              >
                <Text
                  w="fit-content"
                  h="fit-content"
                  color={i % 2 == 0 ? " rgb(2, 172, 172)" : "yellow"}
                >
                  {val[i]}
                </Text>
              </Box>
            </>
          );
        })}
      </Grid>
      <Button colorScheme="teal" mt="8" onClick={handleClear}>
        Clear Game
      </Button>
    </Container>
  );
}
