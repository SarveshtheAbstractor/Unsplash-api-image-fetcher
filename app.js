
/*  <----------Get Image Button Event Handler------>   */
document.getElementById('getimage').onclick = function(){
    var inputtags,countimage;
    countimage = document.getElementById('noimages').value;
    inputtags = document.getElementById('tags').value;
    /*  <----------Check both no.s and images are provided are not------>   */
    if(inputtags == "" || countimage == ""){
        alert('Please Use Some Tag and make Sure You have images greater than 1');
        
         /*  <----------Check  no. is not greater than 30------>   */
    } else if(countimage > 30){
        alert('For Now You can Only Get 30 Images Max');
    } else {
         /*  <----------If user types more than 2 tags, gets an alert------>   */
        arr = inputtags.split(" ");
        arr1 = inputtags.split(",");
        if(arr.length == 1 && arr1.length == 1){
        userinput = inputtags;
        /*  <----------When User has given some input (both No. and Tags)------>   */
        /*  <----------User Input ------>   */
    myAPI(userinput,countimage);
        } else {
            alert('For Now We are Working On geting images on more than 1 Tags :(, Just Use 1 tag for now');
        }
        
    }
}

function myAPI(userinput,count){

var APIKey = '11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192';
$.getJSON(`https://api.unsplash.com/search/photos?query=${userinput}&per_page=100&client_id=${APIKey}`, function(data) {
  console.log(data);
  
  
  var imageList = data.results;
  
  $.each(imageList, function(i, val) {
      console.log(i);
   if(i  > count-1){
      return;
   } else {
    var image = val;
    var imageURL = val.urls.regular;

    $('#display').append('<img src="'+ imageURL +'">');
  }
    
  });  
});

}







/*  <----------Render Item Function for fetching Example images from Unsplash------>   */
function renderItem(){
    keyword = ['Bikes','Cars','Celebrity','Planes'];
    
    
  
  fetch(`https://source.unsplash.com/1600x900/?${keyword[Math.floor(Math.random() * keyword.length)]}`).then((response) => {   
      console.log(response);
      /*  <----------Creating Image Element------>   */
    let item = document.createElement('img');
      /*  <----------Giving Image Src from fetched api------>   */
item.src  = `${response.url}`;     
     document.querySelector('#example').appendChild(item);
}) 
}
/*  <----------Example Image Display Call------>   */
for(var i=0; i < 6 ; i++){
    renderItem();
}



