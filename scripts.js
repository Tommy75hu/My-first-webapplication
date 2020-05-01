let data1 = {
    photo: './Pics/55134.jpg',
    title: 'Photo 1',
    description: 'What happened here, why is this a very nice image'};

let data2 = {
    photo: './Pics/130928.jpg',
    title: 'Photo 2',
    description: 'What happened here, why is this a very nice image'};

let data3 = {
    photo: './Pics/133843.jpg',
    title: 'Photo 3',
    description: 'What happened here, why is this a very nice image'};     

let data4 = {
    photo: './Pics/172558.jpg',
    title: 'Photo 4',
    description: 'What happened here, why is this a very nice image'};

let data5 = {
    photo: './Pics/140755.jpg',
    title: 'Photo 5',
    description: 'What happened here, why is this a very nice image'};  

let data6 = {
    photo: './Pics/175655.jpg',
    title: 'Photo 6',
    description: 'What happened here, why is this a very nice image'};

let data7 = {
    photo: './Pics/202125.jpg',
    title: 'Photo 7',
    description: 'What happened here, why is this a very nice image'};

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7];

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[currentPhoto].title);
  $('#photo-description').text(imagesData[currentPhoto].description);
}
loadPhoto(currentPhoto);

$('#next').click(() => {
  if(currentPhoto < 6){
    currentPhoto++;
  }
  loadPhoto(currentPhoto);
})

$('#prev').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;
  }
  loadPhoto(currentPhoto);
})
$('#t1').attr('src', data1.photo);
$('#t2').attr('src', data2.photo);
$('#t3').attr('src', data3.photo);
$('#t4').attr('src', data4.photo);
$('#t5').attr('src', data5.photo);
$('#t6').attr('src', data6.photo);
$('#t7').attr('src', data7.photo);

$('#t3').click(() => {
  loadPhoto('#t3');
});