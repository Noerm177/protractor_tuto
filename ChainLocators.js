describe('Chain locators demo', () => {
    
    it('Open angular', () => {
        
        browser.get('https://juliemr.github.io/protractor-demo/');
        //repeater, chain and css
        element(by.model('first').sendKeys("3"));
        element(by.model('second').sendKeys("5"));

    element(by.id('gobutton')).click();
    element(by.repeater('result in memory')).element(by.class('td:nth-child(2)')).getText().then(function(text)
        {
            console.log(text);
        })
    });
});