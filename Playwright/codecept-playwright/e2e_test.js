Feature("Zero Bank Application - E2E Tests")


Before(({ I }) => {

    console.log("BEFORE HOOK")
    I.amOnPage('http://zero.webappsecurity.com/index.html')
}) 

After(({ I }) => {

    console.log("AFTER HOOK n/")
}) 

Scenario("Login Test - Negative Scenario", ({ I }) => {
    
    I.click('#signin_button')
    I.seeElement('#login_form')
    I.fillField("#user_login", "invalid username")
    I.fillField("#user_login", "invalid username")
    I.click('.btn-primary')
    I.seeElement('.alert-error')
})