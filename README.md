# Configuração para usar Jest com TS

## Comandos  

Inicializar o repositório

```bash
npm init -y  
````

Instalar as dependencias necessárias:  

```bash
npm install --save-dev jest typescript ts-jest @types/jest  
````

Gerar a configuração do `ts-jest`:

```bash
npx ts-jest config:init
````

Gerar a configuração do `typescript`:

```bash
npx tsc --init
````


## Alteração nos arquivos

O ultimo passo é alterar o `script` no `package.json`, deixando ele dessa maneira:

```javascript
{
    "scripts":{
        "test":"jest"
    }
}
```

E dependendo das sua configurações de ESLint é necessário permitir o `jest/globals`, uma forma de fazer isso é no arquivo `.eslintrc` na chave `env` adicionar `"jest/globals":true`. Ficando da seguinte maneira 
```json
{
    "env": {
        "jest/globals": true
    },
}
```
Referência tirada do artigo do [Eduardo Rabelo](https://oieduardorabelo.medium.com/jest-babel-e-typescript-configurando-testes-para-seu-projeto-201f001f45ef)