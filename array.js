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

//***** Array Reduce method
// const sortedFare = priceBreak.sort((a, b) => a.fare - b.fare);
// console.log(sortedFare);

//***** Array indexOf method
const arr = [2,3,4,5,6];

if(arr.indexOf(2)!==-1){
    console.log('Array is found');
}else{
    console.log('Array is not found');
}
