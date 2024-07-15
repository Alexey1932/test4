const sortHeroesByHealth = require('./heroes');

describe('sortHeroesByHealth function', () => {
	it('should sort heroes by health in descending order', () => {
		const heroes = [
			{ name: 'мечник', health: 10 },
			{ name: 'маг', health: 100 },
			{ name: 'лучник', health: 80 },
		];

		const sortedHeroes = sortHeroesByHealth(heroes);

		expect(sortedHeroes).toEqual([
			{ name: 'маг', health: 100 },
			{ name: 'лучник', health: 80 },
			{ name: 'мечник', health: 10 },
		]);
	});

	it('should handle an empty array', () => {
		const heroes = [];
		const sortedHeroes = sortHeroesByHealth(heroes);
		expect(sortedHeroes).toEqual([]);
	});
});