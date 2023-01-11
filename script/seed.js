"use strict";

const db = require("../server/db");
// const User = require("../server/db/models/User");
// const Product = require("../server/db/models/Product");
// const Order = require("../server/db/models/Order");

const { User, Order, Product } = require("../server/db/models");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
const users = [
  {
    username: "vulputate",
    password: "7410",
    firstName: "Merrill",
    lastName: "Riggs",
    email: "montes@aol.edu",
    address: "869-8406 Et, Ave",
    isAdmin: false,
  },
  {
    username: "Integer",
    password: "2339",
    firstName: "Ainsley",
    lastName: "Parks",
    email: "id@outlook.ca",
    address: "P.O. Box 455, 493 Dictum St.",
    isAdmin: false,
  },
  {
    username: "Nullam",
    password: "6683",
    firstName: "Tashya",
    lastName: "Harper",
    email: "orci.luctus@protonmail.edu",
    address: "2030 Semper St.",
    isAdmin: true,
  },
  {
    username: "vel,",
    password: "2942",
    firstName: "Patrick",
    lastName: "Carrillo",
    email: "vulputate@yahoo.ca",
    address: "Ap #387-776 Mollis Av.",
    isAdmin: true,
  },
  {
    username: "nonummy",
    password: "6840",
    firstName: "Uta",
    lastName: "Caldwell",
    email: "eget.tincidunt@hotmail.org",
    address: "457-8456 Dui St.",
    isAdmin: true,
  },
  {
    username: "eu",
    password: "4449",
    firstName: "Conan",
    lastName: "Sargent",
    email: "phasellus.dolor.elit@hotmail.edu",
    address: "P.O. Box 379, 2249 At St.",
    isAdmin: true,
  },
  {
    username: "est.",
    password: "7888",
    firstName: "Kelly",
    lastName: "Shaffer",
    email: "turpis.aliquam@aol.com",
    address: "Ap #601-6275 Non, St.",
    isAdmin: true,
  },
  {
    username: "massa",
    password: "4515",
    firstName: "Mohammad",
    lastName: "Johnson",
    email: "auctor@yahoo.edu",
    address: "P.O. Box 191, 8564 Vel, Street",
    isAdmin: false,
  },
  {
    username: "imperdiet,",
    password: "4839",
    firstName: "Alfreda",
    lastName: "Garrett",
    email: "eget.magna@google.org",
    address: "Ap #250-5844 Nisi. St.",
    isAdmin: true,
  },
  {
    username: "Nunc",
    password: "6558",
    firstName: "Jarrod",
    lastName: "Prince",
    email: "id.nunc@yahoo.net",
    address: "140-1416 Egestas Rd.",
    isAdmin: true,
  },
  {
    username: "placerat,",
    password: "5919",
    firstName: "Chava",
    lastName: "Stone",
    email: "augue.porttitor@outlook.edu",
    address: "Ap #703-6292 Ac Rd.",
    isAdmin: false,
  },
  {
    username: "laoreet,",
    password: "1930",
    firstName: "Judah",
    lastName: "Jenkins",
    email: "lectus.nullam.suscipit@google.ca",
    address: "Ap #165-9089 Congue Street",
    isAdmin: false,
  },
  {
    username: "lectus",
    password: "1296",
    firstName: "Jonas",
    lastName: "Meyer",
    email: "mauris.ut.quam@yahoo.edu",
    address: "Ap #556-8029 Dolor Road",
    isAdmin: false,
  },
  {
    username: "erat",
    password: "5710",
    firstName: "Amela",
    lastName: "Harvey",
    email: "feugiat@aol.edu",
    address: "592-4135 Faucibus. Road",
    isAdmin: false,
  },
  {
    username: "non",
    password: "8705",
    firstName: "Gisela",
    lastName: "Hood",
    email: "mi.lacinia.mattis@hotmail.com",
    address: "394-5087 Ac Rd.",
    isAdmin: true,
  },
  {
    username: "scelerisque",
    password: "7113",
    firstName: "Upton",
    lastName: "Lucas",
    email: "pede.malesuada@icloud.couk",
    address: "166-658 Urna, St.",
    isAdmin: true,
  },
  {
    username: "Duis",
    password: "7442",
    firstName: "Ethan",
    lastName: "Peterson",
    email: "eu.lacus.quisque@aol.edu",
    address: "P.O. Box 619, 6159 Tempor Road",
    isAdmin: true,
  },
  {
    username: "pede",
    password: "7328",
    firstName: "Dora",
    lastName: "Benjamin",
    email: "dapibus.gravida@protonmail.couk",
    address: "Ap #762-4900 Nulla St.",
    isAdmin: true,
  },
  {
    username: "magna",
    password: "7454",
    firstName: "Stuart",
    lastName: "Carrillo",
    email: "montes.nascetur@yahoo.ca",
    address: "7484 Nunc Rd.",
    isAdmin: true,
  },
  {
    username: "Mauris",
    password: "7773",
    firstName: "Desiree",
    lastName: "Mathews",
    email: "aptent.taciti.sociosqu@protonmail.edu",
    address: "3021 Velit Rd.",
    isAdmin: false,
  },
];

const productData = [
  {
    productName: "risus. Duis a mi",
    description:
      "malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.",
    inventory: 16,
    imageUrl: "http://walmart.com",
    price: 95.17,
  },
  {
    productName: "massa rutrum magna. Cras",
    description:
      "urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum.",
    inventory: 10,
    imageUrl: "http://instagram.com",
    price: 82.63,
  },
  {
    productName: "hendrerit",
    description:
      "cursus in, hendrerit consectetuer, cursus et, magna. Praesent",
    inventory: 21,
    imageUrl: "https://pinterest.com",
    price: 61.14,
  },
  {
    productName: "purus ac",
    description:
      "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices.",
    inventory: 3,
    imageUrl: "https://reddit.com",
    price: 55.92,
  },
  {
    productName: "aliquet lobortis, nisi",
    description: "quam a felis ullamcorper viverra. Maecenas iaculis aliquet",
    inventory: 16,
    imageUrl: "http://walmart.com",
    price: 68.86,
  },
  {
    productName: "Duis risus odio, auctor",
    description:
      "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam",
    inventory: 30,
    imageUrl: "http://yahoo.com",
    price: 90.32,
  },
  {
    productName: "malesuada fames ac turpis egestas.",
    description: "mauris id sapien. Cras",
    inventory: 26,
    imageUrl: "http://ebay.com",
    price: 41.57,
  },
  {
    productName: "Integer vitae",
    description:
      "velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus.",
    inventory: 24,
    imageUrl: "http://zoom.us",
    price: 67.46,
  },
  {
    productName: "ultrices",
    description: "pharetra, felis eget varius ultrices, mauris",
    inventory: 3,
    imageUrl: "http://google.com",
    price: 71.83,
  },
  {
    productName: "gravida nunc",
    description:
      "Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget",
    inventory: 1,
    imageUrl: "http://nytimes.com",
    price: 32.09,
  },
  {
    productName: "posuere cubilia Curae",
    description: "neque tellus, imperdiet non, vestibulum nec, euismod",
    inventory: 13,
    imageUrl: "https://cnn.com",
    price: 39.74,
  },
  {
    productName: "in",
    description: "est arcu ac orci. Ut",
    inventory: 8,
    imageUrl: "http://baidu.com",
    price: 93.81,
  },
  {
    productName: "rutrum urna,",
    description:
      "Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed",
    inventory: 26,
    imageUrl: "https://ebay.com",
    price: 88.42,
  },
  {
    productName: "ultrices",
    description:
      "eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero.",
    inventory: 7,
    imageUrl: "https://cnn.com",
    price: 43.01,
  },
  {
    productName: "augue ac ipsum. Phasellus",
    description: "mi lorem, vehicula et, rutrum",
    inventory: 14,
    imageUrl: "https://youtube.com",
    price: 46.96,
  },
  {
    productName: "diam lorem, auctor",
    description: "leo. Cras vehicula",
    inventory: 7,
    imageUrl: "http://ebay.com",
    price: 27.15,
  },
  {
    productName: "lectus convallis est, vitae sodales",
    description:
      "Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus",
    inventory: 26,
    imageUrl: "https://zoom.us",
    price: 17.7,
  },
  {
    productName: "dolor. Donec fringilla.",
    description: "mauris a nunc. In at pede. Cras",
    inventory: 15,
    imageUrl: "https://naver.com",
    price: 85.38,
  },
  {
    productName: "elit.",
    description: "malesuada. Integer id magna et ipsum",
    inventory: 27,
    imageUrl: "https://reddit.com",
    price: 49.35,
  },
  {
    productName: "placerat. Cras",
    description: "eu dui. Cum sociis natoque penatibus et magnis dis",
    inventory: 21,
    imageUrl: "https://cnn.com",
    price: 13.84,
  },
];

const orderData = [
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
  {
    isComplete: true,
  },
  {
    isComplete: false,
  },
];

async function seed() {
  try {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log("db synced!");

    // Creating Users, Products and Orders.
    await Promise.all(
      users.map((user) => User.create(user)),
      productData.map((product) => Product.create(product)),
      orderData.map((order) => Order.create(order))
    );

    console.log(`seeded ${users.length} users`);
    console.log(`seeded successfully`);
    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
/* async function runSeed() {
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
} */

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  seed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
