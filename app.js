// https://www.omnicalculator.com/conversion/cm-to-in

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inchRadio = document.getElementById('inchRadio');
const cmRadio = document.getElementById('cmRadio');

let inch;
let cm = v; 

// labels of the inpust
const variable = document.getElementById('variable');

inchRadio.addEventListener('click', function() {
  variable.textContent = 'cm';
  cm = v;
  result.textContent = '';
});

cmRadio.addEventListener('click', function() {
  variable.textContent = 'Inch';
  inch = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inchRadio.checked)
    result.textContent = `Inch = ${computeinch().toFixed(5)}`;

  else if(cmRadio.checked)
    result.textContent = `cm = ${computecm().toFixed(5)}`;
})

// calculation

function computeinch() {
  return Number(cm.value) / 2.54;
}

function computecm() {
  return Number(inch.value) * 2.54;
}