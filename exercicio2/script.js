const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/* Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo,
 utilizando `console.log()`:

a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e 
o **terceiro item** do terceiro array.

c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. 
Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano 
**true** e a segunda deve retornar um booleano **false**.

**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.
 */

// A

const meuPrimeiroArray = [26, 30, 50, 11, 15]

const meuSegundoArray = ['Joao', 'Lucas', 'Lima']

const meuTerceiroArray = [25, 26, 'Joao', 'Ted', true, false]


console.log(meuPrimeiroArray.length)

console.log(meuSegundoArray.length)

console.log(meuTerceiroArray.length)

// B
console.log(meuPrimeiroArray[0])

console.log(meuSegundoArray[1])

console.log(meuTerceiroArray[2])

// C

console.log(meuPrimeiroArray.includes(11))
console.log(meuTerceiroArray.includes(11))

