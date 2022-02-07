describe('print data steps',function(){
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b).then(function(){
			element(by.id("gobutton")).click();
		});
	}
	it('locators element',function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Add(2,4);
		Add(2,4);
		Add(2,5);
		Add(2,7);
		Add(8,4);
		Add(3,4);
		
		element.all(by.repeater("result in memory")).count().then(function(rowcount){
			console.log("count :",rowcount);	
		});
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(2)")).getText().then(function(rowcount){
				console.log("function :",rowcount);
			});
			item.element(by.css("td:nth-child(3)")).getText().then(function(rowcount){
				console.log("sum :",rowcount);
			});
			
		});
		
		
});
});