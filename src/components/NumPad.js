import React, { useState } from 'react';
import {
	Button,
	HStack,
	VStack,
	Text,
	Box,
} from '@chakra-ui/react'

export const NumPad = () => {

	const [ value, setValue ] = useState('0');

	const buttonValues = [
		"C", "+-", "%", "/",
		'7','8','9',"X",
   	'4', '5', '6', "-",
   	'1', '2', '3', "+",
   	'0', ".", "="
	];

	const buttons = buttonValues.map(elem => {
		return (
			<Button
				size='lg'
				paddingY='0px'
				paddingX={elem != '=' ? '0px' : '45px'}
				backgroundColor={/\w/.test(elem) == true ? elem == 'X' ? 'purple.400' : elem == 'C' ? 'red' : 'blue.400' : elem == '.' ? 'blue.400' : elem == '=' ? 'teal.400' : 'purple.400'}
				onClick={() => setValue(prevValue => {
					
					console.log(elem)

					if (/\d/.test(parseInt(elem)) == true) {

						if (prevValue != 0) {
							return prevValue + elem;
						} else { return elem }

					} else if (elem == 'C') {
						return 0;
					} else if (elem == '+-') {
						return eval(prevValue +  '*-1');
					} else if (elem == '=') {
						return eval(prevValue);
					} else if (elem == 'X') {
						return prevValue + '*';
					} else if (elem == '%') {
						return eval(prevValue) / 100;
					} else if (elem == '.' && (prevValue + '').indexOf('.') !== -1) {
						return prevValue;
					} else { return prevValue + elem}

				})}>
				{elem}
			</Button>
		);
	})
	
	const result = new Array(5)
	  .fill('')
	  .map((_, i) => {
			return <HStack key={i}>{buttons.slice(i * 4, (i + 1) * 4)}</HStack>
	})
	
	const Display = () => {
		return (
			<>
				<Text
					border='2px'
					borderColor='gray.900'
					borderRadius='4px'
					backgroundColor='gray.900'
					minH='100px' w='215px'
					padding='5px'
					display='flex'
					flexDir='row'
					justifyContent='end'
					alignItems='end'
				>
					{value}
				</Text>
			</>
		);
	}

	return (
		<Box
			border='2px'
			borderColor='gray.600'
			borderRadius='4px'
			padding='6px'
			marginTop='13%'
		>
			<VStack>
				<Display />
				{result}
			</VStack>
		</Box>
	);
}

