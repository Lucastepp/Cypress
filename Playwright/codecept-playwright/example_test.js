

Feature('My test suite');

Scenario('Should load google.com website', ({ I }) => {
    I.amOnPage('https://www.google.com/')

    I.see('Google')
    I.dontSee('Error')

    I.seeElement('h1')
    I.dontSeeElement('haha')
});

Scenario('Should load google.com website - Second test', ({ I }) => {
    I.amOnPage('https://www.google.com/')

    I.see('Google')
    I.dontSee('Error')

    I.seeElement('h1')
    I.dontSeeElement('haha')
});

Scenario('Should load google.com website - Third test', ({ I }) => {
    I.amOnPage('https://www.google.com/')

    I.see('Google')
    I.dontSee('Error')

    I.seeElement('h1')
    I.dontSeeElement('haha')
});
