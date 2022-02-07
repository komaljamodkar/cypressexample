describe('locators steps',function(){
	it('locators element',function(){
		//disable wait for non angular site
		browser.waitForAngularEnabled(false);
		 browser.get('http://juliemr.github.io/protractor-demo/');
				
		 		element(by.model("first")).sendKeys("3");
				element(by.model("second")).sendKeys("3").then(function(){
					
					element(by.id("gobutton")).click();
					expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBe(null);
					expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("6");
					expect(element(by.css("h2[class='ng-binding']")).getText()).toMatch("6");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toMatch("12");
					expect(element(by.css("h2[class='ng-binding']")).getText()).toContain("6");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toContain("12");
					expect(element(by.css("h2[class='ng-binding']")).getText()).toBeLessThan("7");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBeLessThan("5");
					expect(element(by.css("h2[class='ng-binding']")).getText()).toBeGreaterThan("4");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBeGreaterThan("7");
					
					expect(element(by.css("h2[class='ng-binding']")).getText()).toBeCloseTo("6");
					expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBeCloseTo("0");
					
					// expect(a.foo).toBeDefined();
				    //expect(a.bar).not.toBeDefined();
					//  expect(foo).toThrowError("foo bar baz");

					//tagname[attribute='value']
					element(by.css("h2[class='ng-binding']")).getText().then(function(text){
						console.log(text);
					})
				})
				
	});
});