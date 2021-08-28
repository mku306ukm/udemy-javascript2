

// Looping Arrays, Breaking and Continuing
const  pipra = [
    'umesh',
    'kumar',
    2021 - 1994,
    'teacher',
    ['brajesh', 'samod', 'gopal'],
    true
  ];
  const types = [];
  
  for (let i = 0; i <  pipra.length; i++) {
    
    console.log( pipra[i], typeof  pipra[i]);
    
    types.push(typeof  pipra[i]);
  }
  console.log(types);
  
  const years = [1991, 1992, 1993, 1994];
  const ages = [];
  for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
  }
  console.log(ages);
  // continue and break
  
  console.log('--- ONLY STRINGS ---')
  for (let i = 0; i <  pipra.length; i++) {
    if (typeof  pipra[i] !== 'string') continue;
    console.log( pipra[i], typeof  pipra[i]);
  }
  console.log('--- BREAK WITH NUMBER ---')
  for (let i = 0; i <  pipra.length; i++) {
    if (typeof  pipra[i] === 'number') break;
    console.log( pipra[i], typeof  pipra[i]);
  }