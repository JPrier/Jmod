Module.register("workout",{
	defaults: {
		text: "Todays Morning Exercise\n Pushups: "+pushups+"\n"+ "Situps: "+ situps
	},
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 86400);
	},
	var max = 30;
	var min = 10;
	getDom: function() {
		var max += (1/7);
		var min += (1/7);
		var wrapper = document.createElement("div");
		this.pushups = Math.floor((Math.random()*(max-min + 1)) + min)
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});