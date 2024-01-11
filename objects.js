// let obj1 = { key: "value" };
// let obj2 = obj1;
// obj2.key = "new value";
// console.log(obj1.key); // obj1.key will also be "new value" since both variables reference the same object.

const persons = {
  name: "Tonmoy",
  id: 123456,
};

for (let property in persons) {
  console.log(property);
}
