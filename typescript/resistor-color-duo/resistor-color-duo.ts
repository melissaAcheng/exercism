export function decodedValue(resistor: string[]): number {
  let bands: {[key:string]: string} = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9'
  }

  let color1 = resistor[0];
  let color2 = resistor[1];



  let value: string = bands[color1] + bands[color2];
  return parseInt(value);
}


