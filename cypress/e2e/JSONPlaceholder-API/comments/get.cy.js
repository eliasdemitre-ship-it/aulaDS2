function validarEstruturaDoComentario(comentario) {
  expect(comentario).to.be.an('object')
  expect(comentario).to.have.property('postId').that.is.a('number')
  expect(comentario).to.have.property('id').that.is.a('number')
  expect(comentario).to.have.property('name').that.is.a('string')
  expect(comentario).to.have.property('email').that.is.a('string')
  expect(comentario).to.have.property('body').that.is.a('string')
}

describe('JSONPlaceholder API - Teste dos Gets de comments', () => {
  it('Listagem de todos os comentários', () => {
    cy.request('GET', '/comments')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array').with.lengthOf(500)
        response.body.forEach(validarEstruturaDoComentario)
      })
  })

  it('Listagem de um comentário específico', () => {
    cy.request('GET', '/comments/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        validarEstruturaDoComentario(response.body)
        expect(response.body).to.have.property('id', 1)
      })
  })
})
