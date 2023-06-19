let number = Math.floor(Math.random() * 101);
var chance = 0 ;
function guessTheNumber(){
    let input = document.getElementById("input2").value;
    if(input == number){
        document.getElementById("output_comment").innerHTML = `Congratulations....! You Enter Right Number`
        chance = chance+1;
        document.getElementById("chance").innerHTML = `No. of Guesses : ${chance}`
    }else if(input < number){
        document.getElementById("output_comment").innerHTML = `Ohh ho...! You enter ${input} which is wrong! Try again with greater number`
        chance = chance+1;
        document.getElementById("chance").innerHTML = `No. of Guesses : ${chance}`
    }
    else{
        document.getElementById("output_comment").innerHTML = `Ohh ho...! You enter ${input} which is wrong! Try again with smaller number`
        chance = chance+1;
        document.getElementById("chance").innerHTML = `No. of Guesses : ${chance}`
    }
}
