describe('JSONPlaceholder API - Teste de deleção de comments', () => {
  it('Deleção de um comentário', () => {
    cy.request('DELETE', '/comments/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.eq({})
      })
  })
})
