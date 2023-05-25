export class DnDCharacter {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	hitpoints: number;

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}

	public static generateAbilityScore(): number {
		let valuesArr: number[] = [];

		for (let i = 0; i < 4; i++) {
			valuesArr[i] = Math.floor(Math.random() * 6);
		}

    // sort array lowest to highest
		// slice the arr from elements 1-3
		// sum elements
    return valuesArr.sort().slice(1).reduce((a, b) => a + b, 0);
	}

	public static getModifierFor(abilityValue: number): number {
    // consitution modifier = Math.floor((consitution - 10 / 2))
		return Math.floor((abilityValue - 10) / 2);
	}
}