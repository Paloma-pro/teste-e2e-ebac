class LojaPage{
    visitarUrl() {
        cy.visit("produtos"); 
      }
    
      selecionarProduto(nomeProduto) {
        cy.get('.products > .row')
        cy.contains(nomeProduto).click() 
      }

      acessarCarrinho() {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
      }

      irParaCheckout() {
        cy.get('.checkout-button').click()
      }

      preencherCheckout() {
        cy.get('#billing_address_1').clear().type('Rua Amancio Camargo')
        cy.get('#billing_city').clear().type('Javalinhos')
        cy.get('#billing_postcode').clear().type('12345678')
        cy.get('#billing_phone').clear().type('19111234567')
        cy.get('#terms').check()
        cy.get('#place_order').click()
      }



}
export default new LojaPage();
