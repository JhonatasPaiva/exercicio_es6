const Alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Pedro', nota: 4},
    {nome: 'Ana', nota: 10}
]

const aprovados = Alunos.filter(function(item){
    return item.nota >= 6
})

console.log(aprovados)