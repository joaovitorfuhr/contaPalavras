
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment("teste com duas palavras", () => {
  lab.test("contando as palavra", (done) => {
    expect(contaPalavras(2)).to.equal({ frase teste });
    done();
  })
});
