(function(){
	Date.prototype.erHelg = function(){
		const weekend = [0,1];
		const today = this.getDay();
		return _.includes(weekend, today)
	}
})();