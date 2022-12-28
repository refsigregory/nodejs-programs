/**
Rules for seating
• Always seat passengers startng from the front row to back,
  star:ng from the le= to the right
• Fill aisle seats first followed by window seats followed by center
  seats (any order in center seats
*/

/*
Current Time Space & Complecity: O(n^2)
*/

function generateSeating(arr, passengers) {
  let unassigned = passengers;
  let assigned = 0;

  let availableSeats = []
  let aisleSeats = [];
  let middleSeats = [];
  let windowSeats = [];

  let execute = 0;

  for (let group = 0; group < arr.length; group++) {
    aisleSeats[group] = [];
    middleSeats[group] = [];
    windowSeats[group] = [];
    availableSeats[group] = []

    for (let row = 0; row < arr[group][0]; row++) {
      availableSeats[group][row] = []; // generate row

      for (let col = 0; col < arr[group][1]; col++) {
        availableSeats[group][row].push(`[${row}.${col}]`); // generate column
        
        if (row === 0 && col  < arr[group][1] ) { 
          // Left Side Group 
          if (group === 0) {
            // Window Left
            windowSeats[group].push([group,row,col]);
          } else {
            aisleSeats[group].push([group,row,col]);
          }
        } else if (row === (arr[group][0] - 1) && col  < arr[group][1] ) { 
          // Right Side Group 
          if (group === (arr.length - 1)) {
            // Window Right
            windowSeats[group].push([group,row,col]);
          } else {
            aisleSeats[group].push([group,row,col]);
          }
        } else {
          middleSeats[group].push([group,row,col]);
        }

        execute++;
        
      }
    }
  }
  // console.log(`~ ${execute} total iteration`);

  for (let row = 0; row < arr.length; row++)
  {
    aisleSeats.forEach((obj) => {
      obj.forEach((seat) => {
        if (seat[2] === row) {
          if (unassigned > 0) {
            assigned++;
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] ${assigned} (aisle)`; // assign passenger to seat
            unassigned--;
          } else {
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] (aisle)`; // assign passenger to seat
          }
        }
      })
      execute++;
    })
  }
  // console.log(`~ ${execute} iteration`);

  for (let row = 0; row < arr.length; row++)
  {
    windowSeats.forEach((obj) => {
      obj.forEach((seat) => {
        if (seat[2] === row) {
          if (unassigned > 0) {
            assigned++;
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] ${assigned} (window)`; // assign passenger to seat
            unassigned--;
          } else {
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] (window)`; // assign passenger to seat
          }
        }
        execute++;
      })
    })
  }
  // console.log(`~ ${execute} iteration`);

  for (let row = 0; row < arr.length; row++)
  {
    middleSeats.forEach((obj) => {
      obj.forEach((seat) => {
        if (seat[2] === row) {
          if (unassigned > 0) {
            assigned++;
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] ${assigned} (middle)`; // assign passenger to seat
            unassigned--;
          } else {
            availableSeats[seat[0]][seat[1]][seat[2]] = `[${seat[1]}.${seat[2]}] (middle)`; // assign passenger to seat
          }
        }
        execute++;
      })
    })
  }
  
  // console.log(`~ ${execute} iteration`);

  return availableSeats;
}

/**
 Input to the program will be
- a 2D array that represents the rows and columns [ [3,4], [4,5], [2,3], [3,4] ]
- Number of passengers wai:ng in queue
*/

const arr = [[3,2], [4,3], [2,3], [3,4]];
const passengers = 30;
let result = generateSeating(arr, passengers);

// Preview The result:
console.log('\n==================\n');
for (let group = 0; group < arr.length; group++) {
  for (let row = 0; row < arr[group][0]; row++) {
    result[group][row].forEach((obj) => {
      console.log(obj);
    })
    console.log('\n');
  }
  console.log('----------\n');
}
