/*

Testes adoPET - Curso Cypress Alura
Data: 29/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de abertura da página e validação de sucesso do acesso.
describe('Validar acesso a página adoPet', () => {
    it('Acesso ao portal', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
          
    })
        
}) 


