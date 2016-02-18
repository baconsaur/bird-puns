module.exports = {
	getBirdPun: function() {
		var puns = [
			'Meet single birds in your area!',
			'Well this is hawkward…',
			'Owl drink to that',
			'Toucan play at this game',
			'I suspect fowl play',
			'Stay coo',
			'Where do birds get drunk? A crowbar',
			'I just caw it like I see it',
			'Tweet yo self!',
			'Have a pheasant evening',
			'if you liked it then you should\'ve put a wing on it'
		];
		return puns[Math.floor(Math.random() * puns.length)];
	},
	promiseToBeFunny: function() {
		return new Promise(function(laughAt, scoffAt) {
			var pun = module.exports.getBirdPun();
			if (pun === 'funny') {
				laughAt(pun);
			} else {
				scoffAt(pun);
			}
		});
	}
};
