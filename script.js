// String literais
const veiculo = {
    placa: 'ABC1234',
    valor: 120000,
    modelo: 'A4',
    marca: 'Audi',
    conversivel: false
}

console.log(`O veículo da marca ${veiculo.marca} custa R$ ${veiculo.valor}`)

//Desestruturação - Descructuring Assignment
const {modelo, placa} = veiculo
console.log(`O veículo placa ${placa} é do modelo ${modelo}`)

const estacionamento = {
    nome: 'Estacionamento Atlântida',
    CNPJ: '1254564545',
    endereco: {
        logradouro: 'Av. Sete Quedas, 35',
        municipio: 'Itu',
        estado: 'SP'
    }
}

const {nome, CNPJ, endereco: {municipio, estado}} = estacionamento
console.log(nome, CNPJ, municipio, estado)
console.log(`O ${nome} está localizado em ${municipio}-${estado}`)

// REST Operator ...
const [valor1, valor2, ...valorN] = [3, 10, 17, 18, 25, 42]
console.log(valor1)
console.log(valorN)

function soma(...numeros){
    return numeros.reduce((total, proximo) => total + proximo)
}

console.log(soma(4,50))
console.log(soma(40,500,60))
console.log(soma(1,2,3,4,5,6,7,8,9))

//Spread Operator
const array1 = [5, 10, 15, 20]
const array2 = [4, 8, 12, 16, 20, 24, 28]
const array3 = [...array1, ...array2]
console.log(array3)

const estacionamento2 = {...estacionamento, CNPJ: '12.345.678/0001-32'}
console.log(estacionamento2)
//Arrow Functions
// início
const matriz = [2, 4, 6, 8, 10]
const novaMatriz = matriz.map(function(item){
    return item * 3
})
console.log(novaMatriz)

//remover o texto function e transformar em =>
const matriz2 = [2, 4, 6, 8, 10]
const novaMatriz2 = matriz.map((item) => {
    return item * 4
})
console.log(novaMatriz2)

//quando temos apenas 1 parâmetros, podemos remover os ()
const matriz3 = [2, 4, 6, 8, 10]
const novaMatriz3 = matriz.map(item => {
    return item * 5
})
console.log(novaMatriz3)

//quando o return é apenas em uma linha
const matriz4 = [2, 4, 6, 8, 10]
const novaMatriz4 = matriz4.map(item => item * 10)
console.log(novaMatriz4)

//Promises (Promessa)
var promiseGithub = function(urlGithub){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", urlGithub)
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição!')
                }
            }
        }
    })
}

promiseGithub('https://api.github.com/users/ricardoleme')
.then(function(response){
    console.log(response)
}).catch(function(error){
    console.error(error)
})

// Async / Await
const minhaPromise = (texto) => new Promise((resolve, reject) => {
    setTimeout(()=> { resolve(texto)},3000)
})

async function executaAlgo(){
    console.log(await minhaPromise('Início'))
    console.log(await minhaPromise('Meio'))
    console.log(await minhaPromise('Fim'))
}

executaAlgo()

//Fetch - CEP
let cep = '13312320'
let url = `https://viacep.com.br/ws/${cep}/json`
fetch(url)
.then(response => response.json())
.then(result => {console.log(result)})
.catch(err => {
    console.error('Falha ao obter os dados', err)
})

//Fetch - GIT
let user = 'ricardoleme'
let url_git = `https://api.github.com/users/${user}`
fetch(url_git)
.then(response => response.json())
.then(result => {console.log(result)})
.catch(err => {
    console.error('Falha ao obter os dados', err)
})