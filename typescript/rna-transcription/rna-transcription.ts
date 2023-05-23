export function toRna(dna: string) {
	const dict: { [letter: string]: string } = {
		G: "C",
		C: "G",
		T: "A",
		A: "U",
	};

	let result: string = "";

	for (let i = 0; i < dna.length; i++) {
		const letter: string = dna[i];
		if (letter in dict) {
			result += dict[letter];
		} else {
			throw new Error("Invalid input DNA.");
		}
	}

	return result;
}

// function takes in dna input - String
// set up variable RESULT of empty string
// loop through each letter of string
// use dictionary to map dna letter to rna and add to string RESULT
// if letter is not found in map, return 'Invalid input DNA'
// return RESULT
