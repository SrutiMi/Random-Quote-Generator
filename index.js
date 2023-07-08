
//on clicking the button
const button= document.querySelector('.button-js');
button.addEventListener('click',()=>{
    //generating a random number between 0 and 1000
    const randomNumber=Math.floor(Math.random()*1000);
    randomQuote(randomNumber);
});

//the following fetches the object from api and returns a promise and is used to generate a random quote from the api object.
function randomQuote(index){
      fetch('https://type.fit/api/quotes')
      .then((response)=>{
          return response.json();
      })
      .then((response)=>{
        const quotes=response;//storing it in a variable
        document.querySelector('h2').innerHTML= quotes[index].text;
        
      });

}
