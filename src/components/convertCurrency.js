export default function convertCurrency(amount, fromCurrency, toCurrency, exchangeRates) {
   if (fromCurrency === toCurrency) {
     return amount;
   }
 
   const rate = exchangeRates[fromCurrency][toCurrency];
   if (!rate) {
     throw new Error(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`);
   }
 
   return amount * rate;
 }
 