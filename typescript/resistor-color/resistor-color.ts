export const colorCode = (resistor: string) => {
	return COLORS.indexOf(resistor);
};

export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

// export const COLORS: {[key:string]: number} = {
//   black: 0,
//   brown: 1,
//   red: 2,
//   orange: 3,
//   yellow: 4,
//   green: 5,
//   blue: 6,
//   violet: 7,
//   grey: 8,
//   white: 9
// }
