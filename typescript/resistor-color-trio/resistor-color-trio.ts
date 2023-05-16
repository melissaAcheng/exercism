export function decodedResistorValue(resistor: string[]) {
	let dict: { [key: string]: string } = {
		black: "0",
		brown: "1",
		red: "2",
		orange: "3",
		yellow: "4",
		green: "5",
		blue: "6",
		violet: "7",
		grey: "8",
		white: "9",
	};

	const [first, second, ohms] = resistor;
	const value: string = dict[first] + dict[second];
	const zeroes = Array(Number(dict[ohms])).fill(0).join("");
	const num: number = Number(value + zeroes);

	if (num <= 1000) {
		return `${num} ohms`;
	}
	if (num <= 1_000_000) {
		return `${num / 1e3} kiloohms`;
	}
	if (num <= 1_000_000_000) {
		return `${num / 1e6} megaohms`;
	}
	return `${num / 1e9} gigaohms`;
}

// function takes in an array of 3 colors
// create a dictionary matching the color to number
// NUMBER equals dictionary[arr[0]] + dictionary[arr[1]]
// multiply NUMBER by 10 to the dictionary[arr[2]] power
