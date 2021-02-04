let fruits = ['apple', 'orange', 'cherry']
let shoppingCart = fruits

shoppingCart.push('banana')
// console.log(fruits)
// console.log(shoppingCart)

//Para no modificar el arreglo

let fruits1 = ['apple', 'orange', 'cherry']
let shoppingCart1 = fruits.concat([])
// console.log(fruits1)
// console.log(shoppingCart1)

//ejercicio

const styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
// console.log('después de agregar Rock and Roll',styles)

styles[Math.floor(styles.length / 2)] = 'Classic'

// console.log('después de ingresar en el medio classic', styles)

styles.shift()

// console.log('después de shift',styles)

styles.unshift('Rap', 'Reggue')

// console.log('después de unshift',styles)

///splice

let a = [1, 2, 3, 4, 5]
// a.splice(2)

// console.log('splice',a)

//MÉTODO REVERSE

// invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

console.log('array a', a.reverse())