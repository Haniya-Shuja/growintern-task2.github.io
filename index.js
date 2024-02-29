// let string = "";
// let button = document.querySelectorAll('button');
// Array.from('buttons').forEach(('button')=>{
// button.addEventListener('click', (e)=>{ 
//     if(e.target .innerHtml== '='){
//         string = eval (string)
//         document.querySelector('input').value string;
//     }
//     console.log(e.target);
//     string = string + e.target.innerHtml;
//     document.querySelector('input').value string;
//     })
// })


let string = "";
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = 'Error';
      }
      
    } else if (e.target.innerHTML === 'C') {
      string = '';
      document.querySelector('input').value = '';
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});


// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//  alert("Correct!");
// }


//  var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
// //  score++;
//  userIQ = "genius";
//  alert("Correct!");
// }