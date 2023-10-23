let numbers = [5, 4, 3, 2, 1];
for (let index = 0; index < numbers.length; index++) {
    console.log("Numbers are " + (index + 1) + ": " + numbers[index]);

}
console.log();


let numbers2 = [2, 1, 7, 3, 1];
for (let index = 0; index < numbers.length; index++) {
    console.log(`Numbers are ${index + 1}: ${numbers2[index]}`);

}
console.log();

// Array representing the number of shoes in each of 10 boxes 

const shoeCounts = [4, 2, 6, 1, 9, 3, 7, 5, 8, 10];

// Using a for loop to count the number of shoes in each box 

for (let i = 0; i < shoeCounts.length; i++) {

    console.log(`Box ${i + 1} has ${shoeCounts[i]} shoes.`);

} 