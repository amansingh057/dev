const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB");

const fruitsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Write name"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    review: String,
  });



const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitsSchema
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "Aman Singh",
  age: 22,
});
people.save()
// People.deleteMany({name:"Aman Singh"},function(err){
//     if(err){
//         console.log(err)
//     }
// })


const Fruit = mongoose.model("Fruit", fruitsSchema);

const Pineapple = new Fruit({
  name : "Pineapple",
  rating: 9,
  review: "Great fruit",
});
// Pineapple.save()
const Mango = new Fruit({
    name:"Mango",
    rating:8,
    review:"Favourite Best"
})
Mango.save()
const person = new People({
    name: "Ammy",
    age: 12,
    favFruit:Pineapple
  });
//   person.save()
//   const kiwi = new Fruit({
//     name : 'kiwi',
//     score:10,
//     review:"The best fruit"
//   })
//   const orange = new Fruit({
//     name : 'orange',
//     score:4,
//     review:"TOO Sour"
//   })
//   const banana = new Fruit({
//     name : 'banana',
//     score:3,
//     review:"Weired texture"
//   })
//   Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Success")
//     }
//   })

// fruit.save()
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close(); // Closes the mongo connection
//     fruits.forEach(function (ele) {
//       console.log(ele.name);
//     });
//   }
// });

// Fruit.deleteOne({name:"Peach"},function(err){
//     if(err){
//         console.log(err)
//     }
// })
// Fruit.updateOne({ "_id" : "634ac33907c9a903b59f34f4"},{name:"Peach"},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Success")
//     }
// })
People.updateOne({name:"Aman Singh"},{favFruit:Mango},function(err){
    if(err){
        console.log(err)
    }
})
