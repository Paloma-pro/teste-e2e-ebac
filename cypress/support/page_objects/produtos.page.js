class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos')
    }
    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto) {
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor) {
        cy.get('.button-variable-item-' + tamanho).click()     
        cy.get(`.button-variable-item-${cor}`).click()       
        cy.get('.single_add_to_cart_button').click()
    }

    buscarProdutos(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click
    }

}
export default new ProdutosPage();
