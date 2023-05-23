export function age(planet: string, seconds: number): number {
	const earthYears: number = seconds / 31557600;

	const dict: { [key: string]: number } = {
		mercury: 0.2408467,
		venus: 0.61519726,
		earth: 1,
		mars: 1.8808158,
		jupiter: 11.862615,
		saturn: 29.447498,
		uranus: 84.016846,
		neptune: 164.79132,
	};

	return Math.round(earthYears / dict[planet] * 100) / 100;
}

// input is planet, seconds
// convert seconds to earth years
// earth years = seconds / 31557600
// create a dictionary of planet:string to conversion in earth years
// find the planet input in the dictionary
// divide earth years from step 2 by planet conversion
