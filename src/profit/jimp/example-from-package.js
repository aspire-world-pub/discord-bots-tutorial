

/* ------ 1 ------ */
var Jimp = require('jimp');
 
// open a file called "lenna.png"
Jimp.read('lenna.png', (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write('lena-small-bw.jpg'); // save
});



/* ------ 2 ------ */
Jimp.read('lenna.png')
  .then(lenna => {
    return lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write('lena-small-bw.jpg'); // save
  })
  .catch(err => {
    console.error(err);
  });
  
  
  
  /* ------ Array ------ */

Jimp.read('./path/to/image.jpg')
  .then(image => {
    // Do stuff with the image.
  })
  .catch(err => {
    // Handle an exception.
  });
  
Jimp.read('http://www.example.com/path/to/lenna.jpg')
  .then(image => {
    // Do stuff with the image.
  })
  .catch(err => {
    // Handle an exception.
  });
  
Jimp.read(jimpInstance)
  .then(image => {
    // Do stuff with the image.
  })
  .catch(err => {
    // Handle an exception.
  });
 
Jimp.read(buffer)
  .then(image => {
    // Do stuff with the image.
  })
  .catch(err => {
    // Handle an exception.
  });
  
  
  
  /* ------ 4 ------ */
Jimp.read({
  url: 'http://www.example.com/path/to/lenna.jpg', // Required!
  headers: {},
  ...
})
  .then(image => {
    // Do stuff with the image.
  })
  .catch(err => {
    // Handle an exception.
  });
  
  
   /* ------ 5 ------ */
