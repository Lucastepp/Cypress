///<reference types="cypress" />

describe('YouLend Test 1', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('session-username', 'remember_token')
        cy.restoreLocalStorage();

    })
    afterEach(() => {
        cy.saveLocalStorage();
    });


    it('Login', () => {
        cy.visit('https://www.saucedemo.com')

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/'
            )

        })

        cy.get('input[name="user-name"]')
            .type('standard_user')
            .should('have.value', 'standard_user');

        cy.get('input[name="password"]')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce');

        cy.get('input[name="login-button"]')
            .click()

    })


    it('Adding first item to the cart', () => {

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/inventory.html'
            )

        })

        cy.get('button[id="add-to-cart-sauce-labs-backpack"]')
            .click()

        cy.get('a[class="shopping_cart_link"]')
            .click()

    })


    it('Checking item, price and continue shopping', () => {


        cy.get('div[class="inventory_item_name"]')
            .contains('Sauce Labs Backpack')

        cy.get('div[class="inventory_item_price"]')
            .contains('29.99')

        cy.get('button[name="continue-shopping"]')
            .click()

    })


    it('Adding new item', () => {

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/inventory.html'
            )

        })


        cy.get('button[id="add-to-cart-sauce-labs-bike-light"]')
            .click()

        cy.get('a[class="shopping_cart_link"]')
            .click()

        cy.get('div[class="inventory_item_name"]')
            .contains('Sauce Labs Bike Light')


        cy.get('div[class="inventory_item_price"]')
            .contains('9.99')

        cy.get('button[name="continue-shopping"]')
            .click()

    })

    it('Checking the sum', () => {

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/inventory.html'
            )

        })

        cy.get('a[class="shopping_cart_link"]')
            .click()

        cy.get('button[name="checkout"]')
            .click()

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/checkout-step-one.html'
            )

        })

        cy.get('input[name="firstName"]')
            .type('Standard')

        cy.get('input[name="lastName"]')
            .type('User')

        cy.get('input[name="postalCode"]')
            .type('SW62DG')

        cy.get('input[name="continue"]')
            .click()

        cy.get('div[class="inventory_item_price"]')
            .first()
            .should('contain', 29.99)

        cy.get('div[class="inventory_item_price"]')
            .eq(1)
            .should('contain', 9.99)

        cy.get('div[class="summary_subtotal_label"]')
            .should('contain', 39.98)

    })


    it('Logout and trying a different login', () => {


        cy.get('#react-burger-menu-btn')
            .click()

        cy.get('.bm-menu')
            .should('contain', 'All Items', 'About', 'Logout', 'Reset app State')

        cy.get('#logout_sidebar_link')
            .contains('Logout')
            .click()

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/'
            )
        })

        cy.get('input[name="user-name"]')
            .type('locked_out_user')
            .should('have.value', 'locked_out_user');

        cy.get('input[name="password"]')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce');

        cy.get('input[name="login-button"]')
            .click()

        cy.get('.login_wrapper-inner')
            .should('contain', 'Epic sadface: Sorry, this user has been locked out.')

    })


    it('Bonus Points', () => {

        cy.visit('https://www.saucedemo.com')

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com'
            )

        })

        cy.get('input[name="user-name"]')
            .type('problem_user')
            .should('have.value', 'problem_user');

        cy.get('input[name="password"]')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce');

        cy.get('input[name="login-button"]')
            .click()


        cy.get('div[class="inventory_item_name"]')
            .should('contain', 'Sauce Labs Backpack')

        cy.get('div[class="inventory_item_price"]')
            .contains('29.99')

        cy.get('div[class="inventory_item_name"]')
            .contains('Sauce Labs Backpack')
            .click()

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/inventory-item.html?id=5'
            )
        })

    })


    it('Bonus Points - Error (1) with item name', () => {

        cy.get('div[class="inventory_details_name.large_size"]')
            .should('have.text', 'Sauce Labs Backpack')

    })

    it('Bonus Points - Error (2) with the price', () => {

        cy.get('.inventory_details_price')
            .should('have.text', '$29.99')

    })


    it('Bonus Points - Error (3) Trying "Add To Cart" button not working', () => {

        cy.get('button[name="back-to-products"]')
            .click()


        cy.get('#add-to-cart-sauce-labs-fleece-jacket')
            .click()
            .should('have.text', 'Remove')

    })


    it('Bonus Points - Error (4) About Page - 404 Not Found ', () => {

        cy.get('#react-burger-menu-btn')
            .click()

        cy.get('#about_sidebar_link')
            .click()

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/about'
            )
        })


    })

    it('Bonus Points - Error (5) Item not found ', () => {

        cy.visit('https://www.saucedemo.com/')

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/'
            )

        })

        cy.get('input[name="user-name"]')
            .type('problem_user')
            .should('have.value', 'problem_user');

        cy.get('input[name="password"]')
            .type('secret_sauce')
            .should('have.value', 'secret_sauce');

        cy.get('input[name="login-button"]')
            .click()

        cy.get('.inventory_item_name')
            .should('contain', 'Sauce Labs Fleece Jacket')

        cy.get('.inventory_item_description')
            .should('contain', '$49.99', 'Sauce Labs Fleece Jacket')

        cy.get('#item_5_title_link')
            .click()

        cy.get('.inventory_details_desc_container')
            .should('contain', 'Sauce Labs Fleece Jacket', '$49.99')

    })


    it('Bonus Points - Error (6) Problem with the menu when you click All Items ', () => {

        cy.get('button[name="back-to-products"]')
            .click()

        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/inventory.html'
            )

        })


        cy.get('#react-burger-menu-btn')
            .click()

        cy.get('.bm-menu')
            .should('contain', 'All Items', 'About', 'Logout', 'Reset app State')

        cy.get('#inventory_sidebar_link')
            .click()

        //Checking if the menu is still there    
        cy.get('.bm-menu')
            .should('contain', 'All Items', 'About', 'Logout', 'Reset app State')

        cy.get('#inventory_sidebar_link')
            .should('not.be.visible')

    })

})


