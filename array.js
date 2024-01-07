const priceBreak = [
  {
    paxType: "ADT",
    fare: 20,
  },
  {
    paxType: "CNN",
    fare: 15,
  },
  {
    paxType: "INF",
    fare: 10,
  },
];

//***** Array Find method
// const adtFare = priceBreak.find((person) => person?.paxType === "ADT");
// console.log(`The Adult fare is:`,adtFare.fare);

//***** Array Filter method
// const moreFifteen = priceBreak.filter((person) => person.fare >= 15);
// console.log(moreFifteen);

//***** Array Reduce method
// const totalFare = priceBreak.reduce((acc, curr) => {
//   return acc + curr.fare;
// }, 0);

console.log(totalFare);
