// This function can translate english text to hindi
// no key required

const translate = async (text) => {
   // this function only works for english to hindi
   if (text.trim() === "") return; // if no value provided

   const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=" +
      encodeURIComponent(text);
   const response = await fetch(url);
   const data = await response.json();
   return data[0][0][0];
};
