const randomcolour=function(){
    const hex = "0123456789ABCDEF"
    let colour = "#"
    for(let i=0; i<6;i++){
 colour=colour+ hex[Math.floor(Math.random()*15)]
    }
    return colour
};
 let intervalid;
const startchanging = function(){
    if(!intervalid){
        intervalid =setInterval(changebgcolour,500)
    }
   
    function changebgcolour(){
        document.body.style.backgroundColor=randomcolour();
    }

}
 
const stopchanging = function(){
clearInterval(intervalid)
intervalid= null;
}


document.getElementById('start').addEventListener('click',startchanging)

document.getElementById('stop').addEventListener('click',stopchanging)