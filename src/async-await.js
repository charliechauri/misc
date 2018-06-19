/**
 * @description Search coincidences by name in a people list
 * @param {string} name 
 * @returns {Promise} Promise object, represents the list of coincidences found in the list of people
 */
const getPeopleByName = (name) => {
  const people = [
    { name: 'Carlos', age: 27 },
    { name: 'Ariana', age: 26 },
    { name: 'Carlos', age: 18 },
  ];

  return new Promise((resolve, reject) => {
    const coincidences = people.filter(p => p.name.includes(name, 0));

    if(coincidences.length > 0) {
      resolve(coincidences);
    } else {
      reject({ msg: 'No coincidences were found' });
    }
  });
};


async function main() {
  try {
    const result = await getPeopleByName('Maerc');
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

main();