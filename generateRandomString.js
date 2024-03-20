function generateRandomString(length) {
   // Define the possible characters
   const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   // Generate an array of random characters and join them into a string
   const randomString = Array.from({ length }, () => {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars.charAt(randomIndex);
   }).join("");

   return randomString;
}
