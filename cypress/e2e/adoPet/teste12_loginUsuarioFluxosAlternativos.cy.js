/*

Testes adoPET - Curso Cypress Alura
Data: 04/02/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de visualizar os animais para adoção.
describe('Acesso a área de cadastro de novos usuários.', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
        cy.get('[data-test="register-button"]').click();
        cy.contains('p','Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:').should('be.visible');
        
    }) 
    
        it('Cadastro de novo usuário com dados válidos dados NULL', () => {
            //cy.get('[data-test="input-name"]').type('John Doe');
            //cy.get('[data-test="input-email"]').type('johndoe3@email.com');
            //cy.get('[data-test="input-password"]').type('Senha123');
            //cy.get('[data-test="input-confirm-password"]').type('Senha123');
            cy.get('[data-test="submit-button"]').click();

            
                    
        })

        it('Retorno a página inicial do portal adoPet', () => {
            cy.get('.header__home').click();
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
            
                    
        })
                    
        
}) 