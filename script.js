// Write your code here
const lightBulbs = document.querySelectorAll(".item.lightbulb");

const countOutput = document.querySelector(".subtitle");

let count = 0;

lightBulbs.forEach((lightBulb) => {
  //Mouse over
  lightBulb.addEventListener("mouseover", () => {
    lightBulb.classList.add("active");
    //count will be increment only if the light turned on
    if (lightBulb.classList.contains("active")) {
      count++;
      //correct grammar when is one click only
      if (count == 1) {
        countOutput.textContent = `You've clicked the lights ${count} time`;
      } else
        countOutput.textContent = `You've clicked the lights ${count} times`;
    }
  });
  
  //Mouse out
lightBulbs.forEach(lightBulb=>{
  lightBulb.addEventListener("mouseout",()=>{
    lightBulb.classList.remove("active")
  })
})
});
