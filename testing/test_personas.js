const chai = require('chai')
const chaiHttp = require('chai-http')
const {servidor} = require('../index')

chai.use(chaiHttp)

describe('Pruebas para el listado de personas (GET)', () => {
    it('Comprobacion de respuesta codigo 200', (done) => {
        chai.request(servidor).get('/personas').end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200)
            done();
        })    
    })
})