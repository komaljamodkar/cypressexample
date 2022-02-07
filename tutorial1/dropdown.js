describe('chain locators steps',function(){
	function calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element.all(by.tagName("option")).count().then(function(rowcount){
			console.log("dropdown count :",rowcount);	
		});
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(val){
				console.log("option value :",val);
				if(val==c){
					item.click();
				}
			});
			
			
		});
 		//select operator chain locators
		//element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.model("second")).sendKeys(b).then(function(){
			element(by.id("gobutton")).click();
		});
	}
	it('locators element',function(){
		
		 browser.get('http://juliemr.github.io/protractor-demo/');
				
		 		calc(14,5,"DIVISION");
		 		calc(14,7,"SUBTRACTION");		
				element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
					console.log("result :",text);
				})
				
				
				
	});
});