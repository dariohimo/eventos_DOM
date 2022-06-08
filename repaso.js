document.write(`repaso <br>`);
document.write(`repaso <br>`);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`tabla 3 x ${index} =`, element * 3)
}

arr.forEach((item, index) => {
 // console.log(item, index)
  console.log(`tabla del 2 =  {$index}` * 2)
});


const birds = ['🐦', '🦅', '🦆', '🦉'];

birds.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});


let numbers = [2, 4, 6, 8, 10]

numbers.forEach((number, index, arr) => {
  arr[index] = number * 2 // arr = [2, 4, 6, 8, 10]

  document.write(`<li>${number} indice = ${index}, arr ${arr}`)
})

document.write("<br>", "total ", numbers)
console.log(numbers)


numbers.forEach(number => {
    document.write("<br>This ", number)
    console.log(this)
    this.data.push(number * 2)
  })