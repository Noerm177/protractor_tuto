describe('Protractor', () => {
    var obj = require("./Jsobjectdemo.js");
    var using = require('jasmine-data-provider');
    var d = require("./data.js");
    

    beforeEach(() => {
            obj.getURL();
        });

    using(d.Datadriven, function (data, description){
    
        it('Testing calculator functionality', () => {

            obj.firstinput.sendKeys(data.firstinput);
            obj.secondinput.sendKeys(data.secondinput);

            obj.goButton.click();

            expect(obj.result.getText()).toBe(data.result);

            obj.result.getText().then(function(text){

                console.log(text);

            })

            //real output will display only when you resolve promise
            // protractor for 90% of methods will resolve promise automatically
            //there could be 2 potential problems..1. sequnce is not guaranteed
            //
        });
       
       afterEach(function() {
        console.log("Test is completed");
         });
    });  
});