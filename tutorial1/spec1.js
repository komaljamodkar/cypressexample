describe('steps',function(){
	it('Open Angular js website',function(){
		console.log('browser opened');
		browser.get("https://angularjs.org/").then(function(){
			console.log('title : ',browser.getTitle());
		})
		
				
		 browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
				console.log('title : ',browser.getTitle());
				
			})
	});
	
	it('Close Angular js website',function(){
		browser.close();
		console.log('browser closed');
	});
});
