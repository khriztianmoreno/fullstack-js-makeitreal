//WHILE

const names = ['justin', 'sarah', 'cris']

let index = 0

while (index < names.length) {
    const name = names[index]
    // console.log(name)
    index++
}

let i = 0

// while (++i<5) alert(i)



let i2 = 0

// while (i2++<5) alert(i2)

//FOR

const namesFor = ['justin', 'sarah', 'cris']

for (let index = 0; index < namesFor.length; index++) {
    const nameFor = namesFor[index]
    // console.log('ciclo for',nameFor)
}

//FOR OF

const namesForOf = ['justin', 'sarah', 'cris']

for (nameForOf of namesForOf) {
    // console.log('ciclo for of',nameForOf)
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        // console.log('este número es par',i)
    }
}

//imprimir los número de 1 al 10 que sean primos

function findPrimeNumbers() {

    for (let i = 2; i <= 10; i++) {
        let notPrime = false
        for (let num = 2; num < 10; num++) {
            if (num !== i && num % i === 0) {
                notPrime = true
            }
        }
        if (!notPrime) {
            console.log(i)
        }
    }
}

findPrimeNumbers()


// let numero = parseInt(prompt('ingrese un número'))

// for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//         // alert(`el número ${numero} no es primo`)
//         break
//     }

//     // alert('el número es primo')
// }


// for (let i = 2; i = 10; i++) {
//     for (let num = 3; num < 10; num++) {
//         if (num % i === 0) {
//             console.log(`el número ${num} no es primo`)
//         }
//     }
// }
//escriba una función min(a,b) que devuelva el menor valor



function menorValor(a, b) {
    return Math.min(a, b)
}
console.log('el menor valor es', menorValor(3, 5))

//función que devuelve la potencia


function pown(x, n) {
    let potencia = x
    for (let i = 1; i < n; i++) {
        potencia *= x
    }

    return potencia
}

console.log('la potencia es', pown(2, 3))
