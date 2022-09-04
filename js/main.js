const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
arr.forEach((num) => { sum += num });
average = sum / arr.length;
console.log(`The average of my numbers is: ${average}`);
document.getElementById('answer1').innerHTML = `The average of my numbers is: ${average}`


// Open nav
function openNav(){
    document.getElementById("mysideNav").style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
    document.getElementById('main').style.borderRadius = "0 10px 10px 0";
    // document.body.style.backgroundColor = "#ff04"
}

// close nav
function closeNav(){
    document.getElementById("mysideNav").style.width = "0px";
    document.getElementById('main').style.marginLeft = "40px";
    document.getElementById('main').style.borderRadius = "10px"
}

function showTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeZone = "";
  
    if(hours === 0){
        hours = 12;
        timeZone = "AM"
    }
    if(hours > 12){
        hours = hours - 12;
        timeZone = "PM";
     }
  
     hours = (hours < 10) ? `0${hours}` : hours;
     minutes = (minutes < 10) ? `0${minutes}` : minutes;
     seconds = (seconds < 10) ? `0${seconds}` : seconds;
      
    //  let time = hours + ":" + minutes + ":" + seconds + " " + timeZone;
     let time = ` ${hours}:${minutes}:${seconds} ${timeZone} `
  
    document.getElementById("myclock").innerHTML = time; 
    // document.getElementById("myclock").innerHTML = hours;

     setTimeout(showTime, 1000)
  }
  
  showTime();