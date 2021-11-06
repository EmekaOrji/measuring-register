// ["resize", "load"].forEach(e => {
//   window.addEventListener(e, function () {
//     var names = document.querySelectorAll(".preview_name");
//     for (const name of names) {
//       var nameSize = name.offsetWidth;
//       console.log(nameSize);
//       if (nameSize < 125) {
//         name.style.fontSize = "2em";
//       } else {
//         name.style.fontSize = "initial";
//       }
//     }
//   });
// });