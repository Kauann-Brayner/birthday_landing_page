const birthdayDate = new Date('oct 4, 2024, 12:00:00');
const timeStampBirthday = birthdayDate.getTime();
const counterElement = document.querySelector('.hero__content__counter');

const slidePolaroids = document.querySelector(".slide__polaroids")

setInterval(()=>{
    let nowDate = new Date();
    let timeStampNow = nowDate.getTime();

    let deltaTime = (timeStampBirthday - timeStampNow)/1000;

    let sec = Math.floor((deltaTime) % 60);
    let min = Math.floor(((deltaTime) / 60) % 60);
    let hour = Math.floor((deltaTime) / 3600) % 24;
    let day = Math.floor((deltaTime) / (3600*24));
    console.log(day, hour, min, sec);
    
    counterElement.innerHTML = `${day}d ${hour}h ${min}m ${sec}s`
}, 1000);

$('.slide__polaroids').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 560,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }
      ]
});