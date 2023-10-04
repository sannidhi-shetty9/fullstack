const mongoose = require("mongoose");

async function kittendb() {
  // connection
  try {
    const db = await mongoose.connect("mongodb://localhost/testdb");
    console.log(`connected: ${db}`);
  } catch (err) {
    console.log(`connection err: ${err}`);
  }

  // schema
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  // model / class
  const Kitten = mongoose.model("Kitten", kittySchema);

  const fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"

  // saving to db (kitten collection)
  await fluffy.save();
  fluffy.speak();

  // find/get all items from kitten collection
  let kittens = await Kitten.find();
  console.log(kittens);

  kittens = await Kitten.find({ name: /^fluff/ });
  console.log(kittens);

  console.log("update....");
  kittens = await Kitten.findOneAndUpdate(
    { name: /^fluff/ },
    { name: "fluffyyy" }
  );
  // returns old document or data
  console.log(kittens);

  kittens = await Kitten.find({ name: /^fluff/ });
  console.log(kittens);

  console.log("delete...");
  await Kitten.deleteOne({ name: /^fluff/ });

  kittens = await Kitten.find({ name: /^fluff/ });
  console.log(kittens);

  mongoose.connection.close();
}

module.exports = kittendb;
