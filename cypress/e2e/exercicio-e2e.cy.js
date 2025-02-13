/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produtos')
  });

  it('Buscar os produto, preencher as opções e adicionar ao carrinho', () => {
    produtosPage.buscarProdutos('Autumn Pullie')
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    produtosPage.addProdutoCarrinho('M', 'Green', 1)
    cy.get('.woocommerce-message').should('exist')

    produtosPage.visitarUrl()
    produtosPage.buscarProdutoLista('Aether Gym Pant')
    cy.get('.woocommerce-tabs').should('contain', 'The Aether Gym Pant is built for the studio,')
    produtosPage.addProdutoCarrinho('36', 'Brown', 1)
    cy.get('.woocommerce-message').should('exist')

    produtosPage.visitarProduto('Zoltan Gym Tee')
    produtosPage.addProdutoCarrinho('XS', 'Blue', 1)
    cy.get('.woocommerce-message').should('exist')

    cy.fixture('produtos').then(dados =>{
      produtosPage.buscarProdutos(dados[0].nomeProduto)
      cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
      produtosPage.addProdutoCarrinho(
          dados[0].tamanho,
          dados[0].cor,
          dados[0].quantidade)
      cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

    });
  });
})