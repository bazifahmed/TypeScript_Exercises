//Exercise 16: More Guests
let guests: string[] = ["Andrew Tate", "Elon Musk", "Ronaldo"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Tristan Tate");
guests.splice(guests.length / 2, 0, "Iman Gadzhi");
guests.push("Messi");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});