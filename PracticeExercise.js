describe('Protractor Alert steps', function() {

    function selectItems(product)
    {   //items for select
        element.all(by.tagName('app-card')).each(function(card)
                {
            card.element(by.css('h4 a')).getText().then(function(text)
                            {
                                //console.log(text);
                    //condition for text
                        if (text==product)
                                {
                                card.element(by.css("button[class*='btn-info']")).click();
                                }
                            })  }) 
    }

    it('Open website', () => {
        
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name('name')).sendKeys("Mystudents");
        element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys("password2");
        element(by.css('input[type=checkbox]')).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", 'Female')).click();
        element.all(by.name('inlineRadioOptions')).first();
        element(by.buttonText('Submit')).click().then(function()
                {
                    element(by.css("div[class*='success']")).getText().then(function(text)
                            {
                                console.log(text);
                            })
                })
        browser.sleep(3000);

        element(by.linkText('Shop')).click();

        selectItems('iphone X');
        selectItems('Samsung Note 8');        
        //go trough each item and get title
    /*     element.all(by.tagName('app-card')).each(function(card)
                {
                    card.element(by.css('h4 a')).getText().then(function(text)
                            {
                                console.log(text);
                    //condition for text
                        if (text=='Samsung Note 8')
                                {
                                card.element(by.css("button[class*='btn-info']")).click();
                                }
                            })  }) */

        element(by.partialLinkText('Checkout')).getText().then(function(text)
                {
                   // console.log(text);
                   var res=text.split("(");
                   expect(res[1].trim().charAt(0)).toBe('2'); //trim delete spaces
                })

        browser.sleep(3000);

    });   
});