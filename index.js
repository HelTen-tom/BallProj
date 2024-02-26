// const refs={
//     box: document.querySelector(".box"),
//     boxField:  document.querySelector(".box-field")}

//     refs.box.addEventListener("click", (event)=>{
// event.clientX;
// event.clientY
// console.log(event.clientX);
//     })

// const refs = {
//     box: document.querySelector(".box"),
//     ballPicture: document.querySelector(".ball-picture"),
//   };

//     refs.box.addEventListener("click", function (event) {

//       // const x = event.clientX - refs.box.getBoundingClientRect().left;
//       // const y = event.clientY - refs.box.getBoundingClientRect().top;
//         const x = event.clientX;
//         const y = event.clientY;

//        refs.ballPicture.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
//     });

document.addEventListener("DOMContentLoaded", function () {
  // Отримати елементи DOM
  const box = document.querySelector(".box");
  const ballPicture = document.querySelector(".ball-picture");

  // Додати подію click на елемент .box
  box.addEventListener("click", function (event) {
    // Отримати координати кліку відносно .box
    const x = event.clientX - box.getBoundingClientRect().left;
    const y = event.clientY - box.getBoundingClientRect().top;

    // Перемістити м'яч на нові координати
    ballPicture.style.top = y - ballPicture.offsetHeight / 2 + "px";
    ballPicture.style.left = x - ballPicture.offsetWidth / 2 + "px";
  });
});
