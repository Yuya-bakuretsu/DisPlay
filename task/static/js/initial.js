let initial = document.getElementById('Initial-js');
let setting = document.getElementById('Setting-js');
let start = document.getElementById('Start-js')
let next = document.getElementById('Next-js')
start.onclick = function StartTransition(){
  initial.classList.remove('Visible');
  setting.classList.add('Visible')
}