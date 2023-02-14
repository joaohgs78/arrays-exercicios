/* Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie 
**três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama
 **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

Faça o que se pede abaixo nas **cópias** dos arrays originais:

a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir 
o original e a cópia.

b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.


**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.


*/


const meuPrimeiroArray = [26, 30, 50, 11, 15]

const meuSegundoArray = ['Joao', 'Lucas', 'Lima']

const meuTerceiroArray = [25, 26, 'Joao', 'Ted', true, false]


const meuPrimeiroArrayCopia = meuPrimeiroArray.slice()

const meuSegundoArrayCopia = meuSegundoArray.slice()

const meuTerceiroArrayCopia = meuTerceiroArray.slice()


//A

meuPrimeiroArrayCopia.unshift(99)
console.log(meuPrimeiroArray)
console.log(meuPrimeiroArrayCopia)


//B

meuSegundoArrayCopia.pop()
console.log(meuSegundoArray)
console.log(meuSegundoArrayCopia)


//C

meuTerceiroArrayCopia.splice(2, 1)

console.log(meuTerceiroArray)

console.log(meuTerceiroArrayCopia)

