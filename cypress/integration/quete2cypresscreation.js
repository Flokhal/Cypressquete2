beforeEach(() => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
})

describe('create account', () => {
    
        it('should succeed', () => {
            
            cy.get('#firstName').type("Jules")
            cy.get('#lastName').type("Vernier")
            cy.get('#signup-email').type("julesvernier@yopmail.com")
            cy.get('#signup-password').type("Sousmar1")
            cy.get('[data-qa=signup-submit-button]').click()
            cy.url().should('contain', 'orders')
            
        });
        it('should not succeed', () => {
           
            cy.get('#firstName').type("dqzdqz")
            cy.get('#lastName').type("dqdzdzq")
            cy.get('#signup-email').type("dqdzdzqdz@doiuqzd")
            cy.get('#signup-password').type("12EUIOZDFoijpio")
            cy.get('[data-qa=signup-submit-button]').click()
            cy.get('p').should('have.class','flex items-baseline mt-2 text-primary-light peer-disabled:text-primary-disabled font-body text-2 leading-2 font-light !text-danger').should('contain', "Saisissez une adresse e-mail valide.")
            cy.url().should('contain', 'register')
            
        })
        
    })
    