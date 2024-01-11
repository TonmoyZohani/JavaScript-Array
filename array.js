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
// const arr = [2,3,4,5,6];

// if(arr.indexOf(2)!==-1){
//     console.log('Array is found');
// }else{
//     console.log('Array is not found');
// }

//***** Array unique method
// const arr = [2,2,3,4,5,4,6];

// const uniqueArr = new Set (arr);
// console.log([...uniqueArr]);

//***** Array unique method
// const arr = [2, 3, 4, 5, 6];

// const newArr = arr.map((item) => item * 2);
// newArr.forEach((a) => console.log(a * 3));
// console.log(newArr);

// console.log(arr.findIndex((el) => el === 5));

const cmsData = {
  best_deals_1: "https://api.rtc.flyfarint.com/asset/Admin/CMS/bestDeals1.webp",
  best_deals_2: "https://api.rtc.flyfarint.com/asset/Admin/CMS/bestDeals2.webp",
  best_deals_3: "https://api.rtc.flyfarint.com/asset/Admin/CMS/bestDeals3.webp",
  best_deals_4: "https://api.rtc.flyfarint.com/asset/Admin/CMS/bestDeals4.webp",
  best_deals_5: "https://api.rtc.flyfarint.com/asset/Admin/CMS/bestDeals5.webp",
};

const allKeys = Object.keys(cmsData);
const allValues = Object.values(cmsData);

const allBestDeals = allKeys.filter((obj) => {
  return obj.includes("best_deals_");
});

console.log(allBestDeals);
// console.log(allKeys);
// console.log(allValues);
