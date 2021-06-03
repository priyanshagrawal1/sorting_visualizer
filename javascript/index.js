async function clearScreen()
{
   document.querySelector('.bar-list').innerHTML =null;
}
async function create_Array()
{
    await clearScreen();
    let array=[];
    var no_of_bar=document.querySelector('#array_size').value;
    for(var i=0;i<no_of_bar;i++)
    {
        array.push(Math.floor(Math.random()*100));
    }
    const bar_list=document.querySelector(".bar-list");
    for(var i=0;i<no_of_bar;i++)
    {
        const bars=document.createElement('div');
        bars.classList.add('bar');
        bars.style.height=array[i]*4+"px";
        bar_list.appendChild(bars);
    }
}
function swap(el1,el2)
{

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

}
async function bubbleSort()
{
    const bars=document.querySelectorAll('.bar');
    for(var i=0;i<bars.length-1;i++)
    {
        for(var j=0;j<bars.length-i-1;j++)
        {
            bars[j].style.backgroundColor = "#ce1212";
            bars[j+1].style.backgroundColor="#ce1212";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, 600));
            var val1 = parseInt(bars[j].style.height);
            var val2 = parseInt(bars[j+1].style.height);
            if(val1>val2)
            {
                swap(bars[j],bars[j+1]);
            }
            bars[j].style.backgroundColor = "#00adb5";
            bars[j+1].style.backgroundColor = "#00adb5";
            
    }
    bars[bars.length-i-1].style.backgroundColor = "#387c6d";
    }
    bars[0].style.backgroundColor = "#387c6d";
}


async function selectionSort(delay = 300) 
{
  let bars = document.querySelectorAll(".bar");
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) 
   {
        min_idx = i;
        bars[i].style.backgroundColor = "#ce1212";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 100));

        for (var j = i + 1; j < bars.length; j += 1) 
        {
            await new Promise((resolve) =>setTimeout(() => {resolve();}, 100));
            bars[j].style.backgroundColor = "#ce1212";
            var val1 = parseInt(bars[j].style.height);
            var val2 = parseInt(bars[min_idx].style.height);
            if (val1 < val2) {
              if (min_idx !== i) {
                bars[min_idx].style.backgroundColor = "#00adb5";
              }
              min_idx = j;
            } else {
              bars[j].style.backgroundColor = "#00adb5";
            }
        }
        swap(bars[min_idx],bars[i]);
        bars[min_idx].style.backgroundColor = "#00adb5";
        bars[i].style.backgroundColor = "#387c6d";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 100));
  
  }
  bars[0].style.backgroundColor = "#387c6d";
}
async function insertionSort()
{
  let bars = document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = "#387c6d";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var key = parseInt(bars[i].style.height);
    var height = bars[i].style.height;
    bars[i].style.backgroundColor = "#ce1212";
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      bars[j].style.backgroundColor = "#ce1212";
      bars[j + 1].style.height = bars[j].style.height;
      j = j - 1;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = "#387c6d";
      }
    }
  
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
       
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
    bars[i].style.backgroundColor = "#387c6d";
}
}
create_Array();

document.querySelector('#array_size').addEventListener('input',create_Array);

document.querySelector(".new-array").addEventListener('click',create_Array);

document.querySelector('.bubble-sort').addEventListener('click',bubbleSort);

document.querySelector('.insertion-sort').addEventListener('click',insertionSort);

document.querySelector('.selection-sort').addEventListener('click',selectionSort);
