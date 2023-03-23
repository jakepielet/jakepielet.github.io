const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declare the array of image filenames */
const imageList = ['pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg'];
const alts = {
    'pic1.jpg' : 'closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white sansies',
    'pic4.jpg' : 'Section of wall from a thomb',
    'pic5.jpg' : 'Leaf',

}

/* Looping through images */
for(let i=0; i<imageList.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageList[i]);
  newImage.setAttribute('alt', 'Image ' + (i+1));
  thumbBar.appendChild(newImage);

  /* Adding a click event listener to each thumbnail image */
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + imageList[i]);
    displayedImage.setAttribute('alt', 'Image ' + (i+1));
  });
}

/* Writing a handler that runs the darken/lighten button */
btn.addEventListener('click', function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});