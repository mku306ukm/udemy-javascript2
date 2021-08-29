
 //Looping Backwards and Loops in Loops
 const pipra = [
  'umesh',
  'kumar',
  2021-1994,
  'learner',
  ['brajesh', 'samod', 'manoj'],
  true
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = pipra.length - 1; i >= 0; i--) {
  console.log(i, pipra[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
   console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
  }
 }