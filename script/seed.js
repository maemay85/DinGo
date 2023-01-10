'use strict'

const {db} = require('../server/db')
const User = require('../server/db/models/User')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')


  const userData = [
    {
      username: "vulputate",
      password: "7410",
      firstName: "Merrill",
      lastName: "Riggs",
      email: "montes@aol.edu",
      address: "869-8406 Et, Ave",
      isAdmin: false
    },
    {
      username: "Integer",
      password: "2339",
      firstName: "Ainsley",
      lastName: "Parks",
      email: "id@outlook.ca",
      address: "P.O. Box 455, 493 Dictum St.",
      isAdmin: false
    },
    {
      username: "Nullam",
      password: "6683",
      firstName: "Tashya",
      lastName: "Harper",
      email: "orci.luctus@protonmail.edu",
      address: "2030 Semper St.",
      isAdmin: true
    },
    {
      username: "vel,",
      password: "2942",
      firstName: "Patrick",
      lastName: "Carrillo",
      email: "vulputate@yahoo.ca",
      address: "Ap #387-776 Mollis Av.",
      isAdmin: true
    },
    {
      username: "nonummy",
      password: "6840",
      firstName: "Uta",
      lastName: "Caldwell",
      email: "eget.tincidunt@hotmail.org",
      address: "457-8456 Dui St.",
      isAdmin: true
    },
    {
      username: "eu",
      password: "4449",
      firstName: "Conan",
      lastName: "Sargent",
      email: "phasellus.dolor.elit@hotmail.edu",
      address: "P.O. Box 379, 2249 At St.",
      isAdmin: true
    },
    {
      username: "est.",
      password: "7888",
      firstName: "Kelly",
      lastName: "Shaffer",
      email: "turpis.aliquam@aol.com",
      address: "Ap #601-6275 Non, St.",
      isAdmin: true
    },
    {
      username: "massa",
      password: "4515",
      firstName: "Mohammad",
      lastName: "Johnson",
      email: "auctor@yahoo.edu",
      address: "P.O. Box 191, 8564 Vel, Street",
      isAdmin: false
    },
    {
      username: "imperdiet,",
      password: "4839",
      firstName: "Alfreda",
      lastName: "Garrett",
      email: "eget.magna@google.org",
      address: "Ap #250-5844 Nisi. St.",
      isAdmin: true
    },
    {
      username: "Nunc",
      password: "6558",
      firstName: "Jarrod",
      lastName: "Prince",
      email: "id.nunc@yahoo.net",
      address: "140-1416 Egestas Rd.",
      isAdmin: true
    },
    {
      username: "placerat,",
      password: "5919",
      firstName: "Chava",
      lastName: "Stone",
      email: "augue.porttitor@outlook.edu",
      address: "Ap #703-6292 Ac Rd.",
      isAdmin: false
    },
    {
      username: "laoreet,",
      password: "1930",
      firstName: "Judah",
      lastName: "Jenkins",
      email: "lectus.nullam.suscipit@google.ca",
      address: "Ap #165-9089 Congue Street",
      isAdmin: false
    },
    {
      username: "lectus",
      password: "1296",
      firstName: "Jonas",
      lastName: "Meyer",
      email: "mauris.ut.quam@yahoo.edu",
      address: "Ap #556-8029 Dolor Road",
      isAdmin: false
    },
    {
      username: "erat",
      password: "5710",
      firstName: "Amela",
      lastName: "Harvey",
      email: "feugiat@aol.edu",
      address: "592-4135 Faucibus. Road",
      isAdmin: false
    },
    {
      username: "non",
      password: "8705",
      firstName: "Gisela",
      lastName: "Hood",
      email: "mi.lacinia.mattis@hotmail.com",
      address: "394-5087 Ac Rd.",
      isAdmin: true
    },
    {
      username: "scelerisque",
      password: "7113",
      firstName: "Upton",
      lastName: "Lucas",
      email: "pede.malesuada@icloud.couk",
      address: "166-658 Urna, St.",
      isAdmin: true
    },
    {
      username: "Duis",
      password: "7442",
      firstName: "Ethan",
      lastName: "Peterson",
      email: "eu.lacus.quisque@aol.edu",
      address: "P.O. Box 619, 6159 Tempor Road",
      isAdmin: true
    },
    {
      username: "pede",
      password: "7328",
      firstName: "Dora",
      lastName: "Benjamin",
      email: "dapibus.gravida@protonmail.couk",
      address: "Ap #762-4900 Nulla St.",
      isAdmin: true
    },
    {
      username: "magna",
      password: "7454",
      firstName: "Stuart",
      lastName: "Carrillo",
      email: "montes.nascetur@yahoo.ca",
      address: "7484 Nunc Rd.",
      isAdmin: true
    },
    {
      username: "Mauris",
      password: "7773",
      firstName: "Desiree",
      lastName: "Mathews",
      email: "aptent.taciti.sociosqu@protonmail.edu",
      address: "3021 Velit Rd.",
      isAdmin: false
    }
  ]


  // Creating Users
  await Promise.all([
    userData.map((user)=>User.create(user))
  ])

  console.log(`seeded ${userData.length} users`)
  console.log(`seeded successfully`)

}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
