let total = 0;
const numbers = ['b', 10, 20, 30]

numbers.forEach(number => {
if (number === 20) return
total =+ number;
});
console.log (total) ;