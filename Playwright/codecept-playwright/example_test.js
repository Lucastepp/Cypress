

Feature('example');

Scenario('Should load google.com website', ({ I }) => {
    I.amOnPage('https://www.google.com/')
    I.see('Google')
});


