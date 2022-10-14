db.product.insertOne({
  id: 2,
  name: "pencil",
  price: 0.8,
  stock: 12,
  reviews: [
    { authourName: "James", rating: 5, review: "Fantastic!" },
    { authourName: "Singh", rating: 5, review: "The best pencil" },
  ],
});

var obj = [
  {
    name: "Apple",
    score: 8,
    review: "Great fruit",
  },
  {
    name: "Orange",
    score: 6,
    review: "Kinda Sour",
  },
  {
    name: "Banana",
    score: 9,
    review: "Great stuff",
  },
];
/* mongodb://localhost:27017/mydb */
