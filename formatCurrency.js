const number = 12345678;

// Using Intl.NumberFormat to format the number in Indian format
const formattedNumber = new Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: "INR"
}).format(number);

console.log(formattedNumber); // Output: "12,34,567"
