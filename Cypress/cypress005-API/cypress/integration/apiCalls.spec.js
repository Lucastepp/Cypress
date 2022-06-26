

/// <reference types="cypress" />

describe('Calling APIs', () => {



    it('GET List Users', () => {

        cy.request('GET', '/api/users?page=2')
            .as('getUser');
        cy.get('@getUser').then(getUser => {
            expect(getUser.status).to.eq(200);
            expect(getUser.body.page).to.eq(2);
            expect(getUser.body.per_page).to.eq(6);
            expect(getUser.body.total).to.eq(12);
            expect(getUser.body.total_pages).to.eq(2);
            expect(getUser.body.data.length).to.eq(6);
            expect(getUser.body.support.url).to.eq('https://reqres.in/#support-heading');
            expect(getUser.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!');


        })

        cy.request('GET', '/api/users/2')
            .as('getSingleUser');
        cy.get('@getSingleUser').then(getSingleUser => {
            expect(getSingleUser.status).to.eq(200);
            expect(getSingleUser.body.data.id).to.eq(2);
            expect(getSingleUser.body.data.email).to.eq('janet.weaver@reqres.in');
            expect(getSingleUser.body.data.first_name).to.eq('Janet');
            expect(getSingleUser.body.data.last_name).to.eq('Weaver');
            expect(getSingleUser.body.data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg');
            expect(getSingleUser.body.support.url).to.eq('https://reqres.in/#support-heading');
            expect(getSingleUser.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!');

        })

        cy.request({
            method: 'GET',
            url: '/api/users/23',
            failOnStatusCode: false
        })
            .as('getUserNotFound');
        cy.get('@getUserNotFound').then(getUserNotFound => {
            expect(getUserNotFound.status).to.eq(404);
        })
    })


    it('GET Resources', () => {

        cy.request('GET', '/api/unknown/')
            .as('getUnknown');
        cy.get('@getUnknown').then(getUnknown => {
            expect(getUnknown.status).to.eq(200);
            expect(getUnknown.body.page).to.eq(1);
            expect(getUnknown.body.per_page).to.eq(6);
            expect(getUnknown.body.total).to.eq(12);
            expect(getUnknown.body.total_pages).to.eq(2);
            expect(getUnknown.body.data.length).to.eq(6);
            expect(getUnknown.body.support.url).to.eq('https://reqres.in/#support-heading');
            expect(getUnknown.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!');

        })

        cy.request('GET', '/api/unknown/2')
            .as('getUnkSingle');
        cy.get('@getUnkSingle').then(getUnkSingle => {
            expect(getUnkSingle.status).to.eq(200);
            expect(getUnkSingle.body.data.id).to.eq(2);
            expect(getUnkSingle.body.data.name).to.eq('fuchsia rose');
            expect(getUnkSingle.body.data.year).to.eq(2001);
            expect(getUnkSingle.body.data.color).to.eq('#C74375');
            expect(getUnkSingle.body.data.pantone_value).to.eq('17-2031');
            expect(getUnkSingle.body.support.url).to.eq('https://reqres.in/#support-heading');
            expect(getUnkSingle.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!');

        })

        cy.request({
            method: 'GET',
            url: '/api/unknown/23',
            failOnStatusCode: false
        })
            .as('getUnknown404');
        cy.get('@getUnknown404').then(getUnknown404 => {
            expect(getUnknown404.status).to.eq(404);
        })
    })


    it('POST, PUT, PATCH and DELETE', () => {

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                name: 'morpheus',
                job: 'leader'
            }
        })   
            .as('Create');
            cy.get('@Create').then(Create => {
            expect(Create.status).to.eq(201);
            expect(Create.body.name).to.eq('morpheus');
            expect(Create.body.job).to.eq('leader');
            //expect(Create.body.id).to.eq(Create.body.id);
            cy.get(Create.body.id).should('not.be.empty')
            cy.get(Create.body.updatedAt).should('not.be.empty')
            //expect(Create.body.updatedAt).to.eq(Create.body.updatedAt);
        })

        cy.request({
            method: 'PUT',
            url: '/api/users/2',
            body: {
                name: 'morpheus',
                job: 'zion resident'
            }
        }) 
            .as('Update');
        cy.get('@Update').then(Update => {
            expect(Update.status).to.eq(200);
            expect(Update.body.name).to.eq('morpheus');
            expect(Update.body.job).to.eq('zion resident');
            cy.get(Update.body.updatedAt).should('not.be.empty')
            //cy.get(Update.body.updatedAt).to.eq(Update.body.updatedAt);
        })

        cy.request({
            method:'PATCH',
            url: '/api/users/2',
            body: {
                name: 'morpheus',
                job: 'zion resident'
            }    
        })
            .as('UpdatePatch');
        cy.get('@UpdatePatch').then(UpdatePatch => {
            expect(UpdatePatch.status).to.eq(200);
            expect(UpdatePatch.body.name).to.eq('morpheus');
            expect(UpdatePatch.body.job).to.eq('zion resident');
            cy.get(UpdatePatch.body.updatedAt).should('not.be.empty')
            //expect(UpdatePatch.body.updatedAt).to.eq(UpdatePatch.body.updatedAt);

        })

        cy.request('DELETE', '/api/users/2')
            .as('Delete');
        cy.get('@Delete').then(Delete => {
            expect(Delete.status).to.eq(204);
        })
    })

    it('POST - Register', () => {

        cy.request({
            method: 'POST',
            url:'/api/register',
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }   
        })
            .as('RegisterSuccess');
        cy.get('@RegisterSuccess').then(RegisterSuccess => {
            expect(RegisterSuccess.status).to.eq(200);
            expect(RegisterSuccess.body.id).to.eq(4);
            expect(RegisterSuccess.body.token).to.eq('QpwL5tke4Pnpja7X4');
        })

        cy.request({
            method: 'POST',
            url:'/api/register',
            body: {
                email: 'sydney@fife'
            },
            failOnStatusCode: false
        })
            .as('RegisterUnsuccess');
        cy.get('@RegisterUnsuccess').then(RegisterUnsuccess => {
            expect(RegisterUnsuccess.status).to.eq(400);
            expect(RegisterUnsuccess.body.error).to.eq('Missing password');
        })    
        
    })

    it('POST - Login', () => {

        cy.request({
            method: 'POST',
            url:'/api/login',
            body: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }   
        })
            .as('LoginSuccess');
        cy.get('@LoginSuccess').then(LoginSuccess => {
            expect(LoginSuccess.status).to.eq(200);
            expect(LoginSuccess.body.token).to.eq('QpwL5tke4Pnpja7X4');
        })

        cy.request({
            method: 'POST',
            url:'/api/login',
            body: {
                email: 'peter@klaven'
            },
            failOnStatusCode: false
        })
            .as('LoginUnsuccess');
        cy.get('@LoginUnsuccess').then(LoginUnsuccess => {
            expect(LoginUnsuccess.status).to.eq(400);
            expect(LoginUnsuccess.body.error).to.eq('Missing password');
        })    
        
    })
    
    it('GET Delayed Response', () => {

        cy.request('GET', '/api/users?delay=3')
            .as('Delayed');
        cy.get('@Delayed').then(Delayed => {
            expect(Delayed.status).to.eq(200);
            expect(Delayed.body.total).to.eq(12);
            expect(Delayed.body.data.length).to.eq(6);
            expect(Delayed.body.total_pages).to.eq(2);
        })

         
        
    })

    
})

