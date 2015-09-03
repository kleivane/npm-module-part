(function(){
	Date.prototype.erHelg = function(){
		const weekend = [0,6];
		const today = this.getDay();
		return _.includes(weekend, today)
	}

	Date.prototype.erHverdag = function(){
		return !this.getHelg();
	}
})();