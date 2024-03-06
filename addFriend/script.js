const istatus = document.querySelector('h5');
const addFriend = document.querySelector('#add');
const myButton = document.querySelector('button');
let flag = 0;
// const removeFriend = document.querySelector('#remove');

addFriend.addEventListener('click', () => {
  if (flag == 0) {
    istatus.innerHTML = 'Friends';
    istatus.style.color = 'rgb(40, 172, 117)';
    flag = 1;
    myButton.innerText = 'Remove';
    myButton.style.backgroundColor = '#dadada';
    myButton.style.color = 'black';
  } else {
    istatus.innerHTML = 'Stranger';
    istatus.style.color = 'grey';
    flag = 0;
    myButton.innerText = 'Add Friend';
    myButton.style.backgroundColor = 'cadetblue';
  }
});

// removeFriend.addEventListener('click', () => {
//   istatus.innerHTML = 'Stranger';
//   istatus.style.color = 'grey';
//   console.log('tree clean');
// });
