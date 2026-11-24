describe('JSONPlaceholder API - Teste de atualização parcial de comments', () => {
  it('Atualização de um campo preserva os outros campos do comentário', () => {
    const alteracao = { body: 'Corpo atualizado pelo PATCH' }

    cy.request('GET', '/comments/1')
      .then(({ body: comentarioOriginal }) => {
        expect(comentarioOriginal.body).not.to.eq(alteracao.body)

        cy.request('PATCH', '/comments/1', alteracao)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq({ ...comentarioOriginal, ...alteracao })
          })
      })
  })
})
