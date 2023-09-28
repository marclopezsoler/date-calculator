export const getCurrencies = async() => {
   try{
      const response = await fetch(API_URL);
      const data = await response.json();
      // return data.;
   } catch(error){
      console.error('Error fetcching data:', error);
      return [];
   }
};