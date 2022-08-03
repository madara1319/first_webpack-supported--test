import moment from 'moment';
// console.log('Hello world!');
// console.log(moment);
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment().startOf('day').fromNow());

const moment_date = document.querySelector(".moment--js");
  moment_date.innerHTML = `Aktualnie mamy ${moment().format('MMMM Do YYYY, h:mm:ss a')} 
  <br> Dzień zaczął się ${moment().startOf('day').fromNow()}`;