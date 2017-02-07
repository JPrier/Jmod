Module.register("workout",{
	defaults: {
		pushupMax: 30,
		pushupMin: 15,
		situpMax: 40,
		situpMin: 15,
		squatMax: 50,
		squatMin: 25,
	},
	start: function() {
		var self = this;
		//self.updateDom();
		setInterval(function() {
			self.updateDom();
		}, 86400000);
	},
	getDom: function() {
		var exerciseText = this.randomExercises();
		var exercise = document.createTextNode(exerciseText);
		var wrapper = document.createElement("div");
		wrapper.appendChild(exercise);
		return wrapper;
	},
	randomExercises: function() {
		var pushups = Math.floor((Math.random()*(this.config.pushupMax-this.config.pushupMin + 1)) 
			+ this.config.pushupMin);
		var situps = Math.floor((Math.random()*(this.config.situpMax-this.config.situpMin + 1)) 
			+ this.config.situpMin);
		var eText = "Todays Morning Exercise:\nPushups: " + pushups.toString() + "\nSitups: " + situps.toString();
		return eText;
	}
});