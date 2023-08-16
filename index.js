const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");


async function fetchPhotos(){
    
 const inputValue = document.getElementById("input").value;
 if(inputValue > 10 || inputValue < 1){
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "Input value should be between 0 and 11";
      return ;
}
  imgs = "";
  
 try {
    btnEl.style.display = "none";
    const loading = `<img src="spinner.svg"/>`;
    galleryEl.innerHTML = loading;
    await fetch(`https://api.unsplash.com/photos?per_page=
    ${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=UD1oELB0GgMZsQfDXhDjmf7sdBU07PXea8JQg7V5DHE`
    ).then((res)=>
    res.json().then( (data)=>{
           if(data){
             data.forEach((pic) => {
               imgs +=  `
               <img src=${pic.urls.small} alt="images"/>`;
               galleryEl.style.display = "block";
               galleryEl.innerHTML = imgs;
               btnEl.style.display = "block";
              
            });
           }
           
           }
    )    
    );
  
  errorMessageEl.style.display = "none";
    
 } catch (error) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "There is an error occured, please try again later"
    btnEl.style.display = "block";
 }

}


btnEl.addEventListener("click",fetchPhotos);