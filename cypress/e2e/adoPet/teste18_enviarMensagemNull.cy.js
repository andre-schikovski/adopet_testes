/*

Testes adoPET - Curso Cypress Alura
Data: 10/02/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


describe('Login com usuário válido', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
        cy.get('[data-test="login-button"]').click();
        cy.contains('p','Ainda não tem conta?').should('be.visible');
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        
    }) 
    
        it('Enviar Mensagem válida com usuário logado', () => {
            cy.get('.header__message',{ timeout: 10000 }).click();
            cy.get(':nth-child(8) > .card__contact').click();
            cy.get('#name').type('Ana');
            cy.get('#phone').type('41999999999');
            cy.get('#petName').type('Amora');
            cy.get('[data-test="submit-button"]').click();
            //cy.get('#msg').type('O Totó é lindo achei ele maravilhoso!');
            cy.get('.error').should('have.text','É necessário escrever uma mensagem');
                    
        })


        /*
        it('Retorno a página inicial do portal adoPet', () => {
            cy.get('.header__home').click();
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
            
                    
        })
                    
        */
}) 