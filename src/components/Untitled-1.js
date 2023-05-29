"//how to get a code for print the even numbers?"
for (var count = 2; count < 11; count += 2) {
  console.log(count);
}

//how to get a code for show even and odd number id in list?
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sort(e) {
  const type = e % 2 === 0 ? "even" : "odd";
  console.log(`${e} is ${type}`);
}
const no = numbers.forEach(sort);




