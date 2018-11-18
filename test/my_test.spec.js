const trueOrFalse = require('../index.js')
const chai = require('chai')
const expect = chai.expect

describe('se o parametro for verdadeiro', ()=>{
  it('deve retornar "true" ', ()=> expect(trueOrFalse(10)).to.equal(true))
})
describe('se o param for falso', ()=>{
  it('deve retornar false', ()=> expect(trueOrFalse(NaN)).to.equal(false))
})
describe('se o param for vazio', ()=>{
  it('deve retornar valor vazio', ()=> expect(trueOrFalse('heloo')).to.not.be.NaN)
})

const assert = require("assert")
const isPalindrome = require("../palindrome.js")

describe('a função deve retornar true ou false para os casos abaixo', () => {
	it('', () => assert.equal(isPalindrome(''), true))
	it('52625', () => assert.equal(isPalindrome('52625'), true))
  it('omissíssimo', () => assert.equal(isPalindrome('omissíssimo'), true))
  it('ama', ()=> assert.equal(isPalindrome('ama'), true))
	it('natalya', () => assert.equal(isPalindrome('janiarli'), false))
	it('52652', () => assert.equal(isPalindrome('52652'), false))
	it('não', () => assert.equal(isPalindrome('não'), false))
});

//para testar com mocha, vamos na linha de comando $ 'mocha "caminho do arquivo spec"' 