var Storage = {
	store: function (sets) {
		var domain_sets = JSON.stringify(sets);
		localStorage.domain_sets = domain_sets;
		console.log("Saved", domain_sets);
		// Sync to Chrome storage
		chrome.storage.sync.set({"domain_sets":domain_sets}, function() {		
			console.log("Sync completed");
        }); 
	},
	load: function () {
		// Sync to Chrome storage
		chrome.storage.sync.get("domain_sets", function(obj) {
			var sets = obj["domain_sets"];
			if( ! sets ) { return; }
			localStorage.domain_sets = sets;
			console.log("Sync loaded", sets);
		});
		
		var sets = localStorage.domain_sets;
		console.log("Local loaded", sets);
		if( ! sets ) { return; }
		sets = JSON.parse(sets);
		for( var i in sets ) {
			sets[i] = new DomainSet(sets[i].name, sets[i].domains);
		}
		return sets;
	}
};
