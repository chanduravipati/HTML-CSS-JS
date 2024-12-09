let url="https://restcountries.com/v3.1/alpha/co";
async function getCountry(url) {
    let ans1=await fetch(url);
    console.log(ans1);
}