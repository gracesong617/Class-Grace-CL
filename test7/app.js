const cupcakeButton = document.getElementById("cupcakebutton");
const cakeButton = document.getElementById("cakebutton");
const iceButton = document.getElementById("icebutton");
const waffleButton = document.getElementById("wafflebutton");
const backButton1 = document.getElementById("backbutton1");
const backButton2 = document.getElementById("backbutton2");
const backButton3 = document.getElementById("backbutton3");
const backButton4 = document.getElementById("backbutton4");
const backButton5 = document.getElementById("backbutton5");
const finishButton1 = document.getElementById("finishbutton1");
const finishButton2 = document.getElementById("finishbutton2");
const finishButton3 = document.getElementById("finishbutton3");
const finishButton4 = document.getElementById("finishbutton4");
const finishButton5 = document.getElementById("finishbutton5");

const pageCupcake = document.getElementById("pagecupcake");
const pageCake = document.getElementById("pagecake");
const pageIce = document.getElementById("pageice");
const pageWaffle = document.getElementById("pagewaffle");

const page1 = document.getElementById("page1");
const pagefinish = document.getElementById("pagefinish");


let cupcaketopping = [];
let cupsprinkle = [];
let cupicing = [];
let cupcake = [];

let toppings = [];
let buttercream = [];
let cake = [];

let sprinkles = [];
let topping = [];
let icing = [];
let cupcakecake = [];

let ice = [];
let cone = [];
let sprinkle = [];
let icetopping = [];

let waffletoppings = [];
let base = [];

window.addEventListener("load", () => {
         page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");


  //fetch the data
  let ccData = "https://raw.githubusercontent.com/gracesong617/Class-Grace-CL/main/project1/data.json";
  fetch(ccData)
  .then( response => response.json()  )
  .then( data => {
    console.log('data', data);
    toppings = data.Cakes.toppings;

    //populate the dropdown

    for(let i =0;i<toppings.length;i++) {
      //create a new option element
      let toppingsOption = document.createElement("option");
      toppingsOption.innerHTML = toppings[i].name;

      toppingsOption.value = toppings[i].id;
      let toppingsDropdown = document.getElementById("toppings-select");
      toppingsDropdown.appendChild(toppingsOption);
    }

    // what do you do when the item is selected?
    let toppingsDropdown = document.getElementById("toppings-select");

    toppingsDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("toppings-img").visibility = 'visible'
      document.getElementById("toppings-img").src = toppings[index].img;

    })

    buttercream = data.Cakes.buttercream;

    for(let i =0;i<buttercream.length;i++) {
      let buttercreamOption = document.createElement("option");
      buttercreamOption.innerHTML = buttercream[i].name;
      buttercreamOption.value = buttercream[i].id;
      let buttercreamDropdown = document.getElementById("buttercream-select");
      buttercreamDropdown.appendChild(buttercreamOption);
    }

    let buttercreamDropdown = document.getElementById("buttercream-select");

    buttercreamDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("buttercream-img").visibility = 'visible'
      document.getElementById("buttercream-img").src = buttercream[index].img;

    })

    cake = data.Cakes.cake;

    for(let i =0;i<cake.length;i++) {
      let cakeOption = document.createElement("option");
      cakeOption.innerHTML = cake[i].name;
      // TODO: value需要传递为id
      cakeOption.value = cake[i].id;
      let cakeDropdown = document.getElementById("cake-select");
      cakeDropdown.appendChild(cakeOption);
    }

    let cakeDropdown = document.getElementById("cake-select");

    cakeDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
       document.getElementById("cake-img").visibility = 'visible'
      document.getElementById("cake-img").src = cake[index].img;

    })


    sprinkle = data.IceCream.sprinkles;

    for(let i =0;i<sprinkle.length;i++) {
      let sprinkleOption = document.createElement("option");
      sprinkleOption.innerHTML = sprinkle[i].name;
      sprinkleOption.value = sprinkle[i].id;
      let sprinkleDropdown = document.getElementById("sprinkle-select");
      sprinkleDropdown.appendChild(sprinkleOption);
    }

    let sprinkleDropdown = document.getElementById("sprinkle-select");

    sprinkleDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("sprinkle-img").visibility = 'visible'
      document.getElementById("sprinkle-img").src = sprinkle[index].img;

    })

    icetopping = data.IceCream.topping;

    for(let i =0;i<icetopping.length;i++) {
      let icetoppingOption = document.createElement("option");
      icetoppingOption.innerHTML = icetopping[i].name;
      icetoppingOption.value = icetopping[i].id;
      let icetoppingDropdown = document.getElementById("icetopping-select");
      icetoppingDropdown.appendChild(icetoppingOption);
    }

    let icetoppingDropdown = document.getElementById("icetopping-select");

    icetoppingDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("icetopping-img").visibility = 'visible'
      document.getElementById("icetopping-img").src = icetopping[index].img;

    })


    ice = data.IceCream.Ice;

    for(let i =0;i<ice.length;i++) {
      let iceOption = document.createElement("option");
      iceOption.innerHTML = ice[i].name;
      // TODO: value需要传递为id
      iceOption.value = ice[i].id;
      let iceDropdown = document.getElementById("ice-select");
      iceDropdown.appendChild(iceOption);
    }

    let iceDropdown = document.getElementById("ice-select");

    iceDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("ice-img").visibility = 'visible'
      document.getElementById("ice-img").src = ice[index].img;

    })

    cone = data.IceCream.cone;

    for(let i =0;i<cone.length;i++) {
      let coneOption = document.createElement("option");
      coneOption.innerHTML = cone[i].name;
      coneOption.value = cone[i].id;
      let coneDropdown = document.getElementById("cone-select");
      coneDropdown.appendChild(coneOption);
    }

    let coneDropdown = document.getElementById("cone-select");

    coneDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("cone-img").visibility = 'visible'
      document.getElementById("cone-img").src = cone[index].img;

    })

    waffletoppings = data.waffle.toppings;

    for(let i =0;i<waffletoppings.length;i++) {
      let waffletoppingsOption = document.createElement("option");
      waffletoppingsOption.innerHTML = waffletoppings[i].name;
      waffletoppingsOption.value = waffletoppings[i].name;
      let waffletoppingsDropdown = document.getElementById("waffletoppings-select");
      waffletoppingsDropdown.appendChild(waffletoppingsOption);
    }

    let waffletoppingsDropdown = document.getElementById("waffletoppings-select");

    waffletoppingsDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("waffletoppings-img").visibility = 'visible'
      document.getElementById("waffletoppings-img").src = waffletoppings[index].img;

    })

    base = data.waffle.base;

    for(let i =0;i<base.length;i++) {
      let baseOption = document.createElement("option");
      baseOption.innerHTML = base[i].name;
      baseOption.value = base[i].name;
      let baseDropdown = document.getElementById("base-select");
      baseDropdown.appendChild(baseOption);
    }

    let baseDropdown = document.getElementById("base-select");

    baseDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("base-img").visibility = 'visible'
      document.getElementById("base-img").src = base[index].img;

    })

    cupsprinkle = data.Cupcakes.sprinkles;

    for(let i =0;i<cupsprinkle.length;i++) {
      let cupsprinkleOption = document.createElement("option");
      cupsprinkleOption.innerHTML = cupsprinkle[i].name;
      cupsprinkleOption.value = cupsprinkle[i].id;
      let cupsprinkleDropdown = document.getElementById("cupsprinkle-select");
      cupsprinkleDropdown.appendChild(cupsprinkleOption);
    }

    let cupsprinkleDropdown = document.getElementById("cupsprinkle-select");

    cupsprinkleDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("cupsprinkle-img").visibility = 'visible'
      document.getElementById("cupsprinkle-img").src = cupsprinkle[index].img;

    })

    cupcaketopping = data.Cupcakes.topping;

    for(let i =0;i<cupcaketopping.length;i++) {
      let cupcaketoppingOption = document.createElement("option");
      cupcaketoppingOption.innerHTML = cupcaketopping[i].name;
      cupcaketoppingOption.value = cupcaketopping[i].id;
      let cupcaketoppingDropdown = document.getElementById("cupcaketopping-select");
      cupcaketoppingDropdown.appendChild(cupcaketoppingOption);
    }

    let cupcaketoppingDropdown = document.getElementById("cupcaketopping-select");

    cupcaketoppingDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("cupcaketopping-img").visibility = 'visible'
      document.getElementById("cupcaketopping-img").src = cupcaketopping[index].img;

    })

    cupicing = data.Cupcakes.icing;

    for(let i =0;i<cupicing.length;i++) {
      let cupicingOption = document.createElement("option");
      cupicingOption.innerHTML = cupicing[i].name;
      cupicingOption.value = cupicing[i].id;
      let cupicingDropdown = document.getElementById("cupicing-select");
      cupicingDropdown.appendChild(cupicingOption);
    }

    let cupicingDropdown = document.getElementById("cupicing-select");

    cupicingDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("cupicing-img").visibility = 'visible'
      document.getElementById("cupicing-img").src = cupicing[index].img;

    })

    cupcake = data.Cupcakes.cake;

    for(let i =0;i<cupcake.length;i++) {
      let cupcakeOption = document.createElement("option");
      cupcakeOption.innerHTML = cupcake[i].name;
      cupcakeOption.value = cupcake[i].id;
      let cupcakeDropdown = document.getElementById("cupcake-select");
      cupcakeDropdown.appendChild(cupcakeOption);
    }

    let cupcakeDropdown = document.getElementById("cupcake-select");

    cupcakeDropdown.addEventListener("change", (e) => {
      let index = e.target.selectedIndex;
      document.getElementById("cupcake-img").visibility = 'visible'
      document.getElementById("cupcake-img").src = cupcake[index].img;

    })



  })
})

//buttons

let type="-1"
document.addEventListener("DOMContentLoaded", function() {
  cupcakeButton.addEventListener("click", function() {
      clearOption()
      page1.classList.add("hidden");
      pageCupcake.classList.remove("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
      type="a";
  });

  cakeButton.addEventListener("click", function() {
      clearOption()

      page1.classList.add("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.remove("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
      type="b";
  });

  iceButton.addEventListener("click", function() {
      clearOption()

      page1.classList.add("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.remove("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
      type="c";
  });

  waffleButton.addEventListener("click", function() {
      clearOption()


      page1.classList.add("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.remove("hidden");
      pagefinish.classList.add("hidden");
      type="d";
  });

  backButton1.addEventListener("click", function() {
     console.log('wclick');
      page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
   });

    backButton2.addEventListener("click", function() {
     console.log('wclick');
      page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
   });


      backButton3.addEventListener("click", function() {
     console.log('wclick');
      page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
   });


        backButton4.addEventListener("click", function() {
     console.log('wclick');
      page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
   });


          backButton5.addEventListener("click", function() {
     console.log('wclick');
      page1.classList.remove("hidden");
      pageCupcake.classList.add("hidden");
      pageCake.classList.add("hidden");
      pageIce.classList.add("hidden");
      pageWaffle.classList.add("hidden");
      pagefinish.classList.add("hidden");
   });

   finishButton1.addEventListener("click", function() {
    console.log('nclick');
     page1.classList.add("hidden");
     pageCupcake.classList.add("hidden");
     pageCake.classList.add("hidden");
     pageIce.classList.add("hidden");
     pageWaffle.classList.add("hidden");
     pagefinish.classList.remove("hidden");
  });
      finishButton2.addEventListener("click", function() {
    console.log('nclick');
     page1.classList.add("hidden");
     pageCupcake.classList.add("hidden");
     pageCake.classList.add("hidden");
     pageIce.classList.add("hidden");
     pageWaffle.classList.add("hidden");
     pagefinish.classList.remove("hidden");
  });
         finishButton3.addEventListener("click", function() {
    console.log('nclick');
     page1.classList.add("hidden");
     pageCupcake.classList.add("hidden");
     pageCake.classList.add("hidden");
     pageIce.classList.add("hidden");
     pageWaffle.classList.add("hidden");
     pagefinish.classList.remove("hidden");
  });
            finishButton4.addEventListener("click", function() {
    console.log('nclick');
     page1.classList.add("hidden");
     pageCupcake.classList.add("hidden");
     pageCake.classList.add("hidden");
     pageIce.classList.add("hidden");
     pageWaffle.classList.add("hidden");
     pagefinish.classList.remove("hidden");
  });
               finishButton5.addEventListener("click", function() {
    console.log('nclick');
     page1.classList.add("hidden");
     pageCupcake.classList.add("hidden");
     pageCake.classList.add("hidden");
     pageIce.classList.add("hidden");
     pageWaffle.classList.add("hidden");
     pagefinish.classList.remove("hidden");
  });

});

//clear button

function clearOption() {
  console.log('ddddd');
  console.log(type);
  // fisrtOption
  switch (type) {
    case "a":
      console.log('wwww');
      document.getElementById("cupsprinkle-select").value = "-1";
      document.getElementById("cupsprinkle-img").src = "";
      document.getElementById("cupcaketopping-select").value = "-1";
      document.getElementById("cupcaketopping-img").src = "";
      document.getElementById("cupicing-select").value = "-1";
      document.getElementById("cupicing-img").src = "";
      document.getElementById("cupcake-select").value = "-1";
      document.getElementById("cupcake-img").src = "";

    case "b":
      console.log('wwww');
      document.getElementById("toppings-select").value = "-1";
      document.getElementById("toppings-img").src = "";
      document.getElementById("buttercream-select").value = "-1";
      document.getElementById("buttercream-img").src = "";
      document.getElementById("cake-select").value = "-1";
      document.getElementById("cake-img").src = "";
      break;

    case "c":
      console.log('wwww');
      document.getElementById("ice-select").value = "-1";
      document.getElementById("ice-img").src = "";
      document.getElementById("cone-select").value = "-1";
      document.getElementById("cone-img").src = "";
      document.getElementById("icetopping-select").value = "-1";
      document.getElementById("icetopping-img").src = "";
      document.getElementById("sprinkle-select").value = "-1";
      document.getElementById("sprinkle-img").src = "";
      break;

    case "d":
      console.log('wwww');
      document.getElementById("waffletoppings-select").value = "-1";
      document.getElementById("waffletoppings-img").src = "";
      document.getElementById("base-select").value = "-1";
      document.getElementById("base-img").src = "";
      break;

  }
}

// const genePic=()=>{
//   console.log('1111');
//   console.log(type);
//   switch(type){
//     // TODO: 对不同的type判断
//     case "c":
//     let s1=document.getElementById("ice-select")
//     let s2=document.getElementById("cone-select")
//     // console.log('ss',s1);
//     console.log('s1',s1.value);
//     console.log('s2',s2.value);
//     pagefinish.classList.remove("hidden");
//     let finalImg=document.getElementById("finalPic")
//     console.log(finalImg);
//     finalImg.setAttribute('src',type+"-"+s1.value+"-"+s2.value+".png");
//     // finalImg.src=type+"-"+s1.value+"-"+s2.value+".png";
//     console.log(finalImg.src);
//     break
//   }

// }


function setup() {
  const myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('canvas-container'); // 将画布添加到指定的<div>容器中
  noStroke();
  rectMode(CENTER);
}

function draw() {
  let stripeWidth = 30;
  let numStripes = Math.ceil(width / stripeWidth);

  for (let i = 0; i < numStripes; i++) {
      let x = i * stripeWidth + stripeWidth / 2;
      let fillColor = (i % 2 === 0) ? color(139, 69, 19) : color(255, 228, 181);
      fill(fillColor);
      rect(x, height / 2, stripeWidth, height);
  }
}


function setup() {
  const myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('canvas-container'); // 将画布添加到指定的<div>容器中
  noStroke();
  rectMode(CENTER);
}

function draw() {
  let stripeWidth = 30;
  let numStripes = Math.ceil(width / stripeWidth);

  for (let i = 0; i < numStripes; i++) {
      let x = i * stripeWidth + stripeWidth / 2;
      let fillColor = (i % 2 === 0) ? color(241, 235, 235) : color(227,201,186);
      fill(fillColor);
      rect(x, height / 2, stripeWidth, height);
  }
  fill(215, 179, 183);
  let yoff = 0.0;
  beginShape();
  let xoff = 0; 
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

