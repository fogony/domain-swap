var DefaultStorage = {
	defaultDomainSets:[  
	   {  
		  "name":"ACM",
		  "domains":[  
			 "dl.acm.org.ezp.lib.unimelb.edu.au",
			 "dl.acm.org"
		  ]
	   },
	   {  
		  "name":"IEEE",
		  "domains":[  
			 "ieeexplore.ieee.org.ezp.lib.unimelb.edu.au",
			 "ieeexplore.ieee.org"
		  ]
	   },
	   {  
		  "name":"Google Scholar",
		  "domains":[  
			 "scholar-google-com-au.ezp.lib.unimelb.edu.au",
			 "scholar.google.com.au"
		  ]
	   },
	   {  
		  "name":"Scopus",
		  "domains":[  
			 "www-scopus-com.ezp.lib.unimelb.edu.au",
			 "www.scopus.com"
		  ]
	   },
	],
	loadAndSave: function (sets) {
		if( ! sets ) { return; }
		// Transform the JSON object into DomainSet
		for( var i in sets ) {
			sets[i] = new DomainSet(sets[i].name, sets[i].domains);
		}
		// Save the default set using Storage
		Storage.store(sets);
		console.log(sets);
	}
};

chrome.runtime.onInstalled.addListener(function(details){
    //if(details.reason == "install") 
	{
		// Default setting is applied only at a new installation
		DefaultStorage.loadAndSave(DefaultStorage.defaultDomainSets);
    }
});