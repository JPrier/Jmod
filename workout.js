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

	},
	getDom: function() {
		var exerciseText = this.randomExercises();
		//var exercise = document.createTextNode(exerciseText);
		var wrapper = document.createElement("div");
		wrapper.innerHTML = exerciseText;
		//wrapper.appendChild(exercise);
		return wrapper;
	},
	randomExercises: function() {
		var pushups = Math.floor((Math.random()*(this.config.pushupMax-this.config.pushupMin + 1)) 
			+ this.config.pushupMin);
		var situps = Math.floor((Math.random()*(this.config.situpMax-this.config.situpMin + 1)) 
			+ this.config.situpMin);
		var eText = "Todays Morning Exercise:\nPushups: ";// + pushups.toString() + "\nSitups: " + situps.toString();
		return eText;
	},
	scheduleUpdate: function() {
		var nextLoad = 10000;
		this.config.pushupMax += 400;
		var self = this;
		clearTimeout(this.updateTimer);
		this.updateTimer = setTimeout(function() {
			self.updateDom();
		}, nextLoad);
	}
});