Module.register("workout",{
	defaults: {
		pushupMax: 30,
		pushupMin: 15,
		situpMax: 40,
		situpMin: 15,
		squatMax: 50,
		squatMin: 25,
		pushups: Math 
		text: "Todays Morning Exercise\n"
	},
	start: function() {
		var max = 30;
		var min = 10;
		var self = this;
		self.updateDom();
		setInterval(function() {
			self.updateDom();
		}, 86400000);
	},
	getDom: function() {
		var max = max + (1/7);
		var min = min + (1/7);
		var wrapper = document.createElement("div");

		this.pushups = Math.floor((Math.random()*(max-min + 1)) + min);
		this.situps = Math.floor((Math.random()*(max-min + 1)) + min);
		this.config.text += "Pushups: " + pushups.toString() + "\nSitups: " + situps.toString();
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});