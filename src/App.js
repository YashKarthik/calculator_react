import React from 'react';
import { NumPad } from './components/NumPad.js'
import {
	Heading,
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing='150px'>
						<Heading>Calculator</Heading>
						<NumPad />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
