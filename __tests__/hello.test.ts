import sayHello from '../scripts/hello'

describe('Teste do arquivo "hello.ts"', () => {
  it('Verifica se a função "sayHello" retorna a string "Hello fulano" corretamente', () => {
    expect(sayHello('fulano')).toBe('Hello fulano')
  });
});
