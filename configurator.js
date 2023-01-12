// set data structures
const colors = [
  {"_id": "c1",
  "color_name": "blue", 
  "color_value": "#165895"},
  {"_id": "c2",
  "color_name": "teal", 
  "color_value": "#509F9B"},
  {"_id": "c3",
  "color_name": "forest", 
  "color_value": "#6F8248"},
  {"_id": "c4",
  "color_name": "pink", 
  "color_value": "#EFC7D1"},
]

const designs = [
  {"_id": "d1",
  "icon": "J",
  "message": "Just Code It!"},
  {"_id": "d2", 
  "icon": "I",
  "message": "I'm just here for the food"},
  {"_id": "d3", 
  "icon": "P",
  "message": "Pour yourself a cup of ambition"},
  {"_id": "d4", 
  "icon": "Y",
  "message": "You have died of dysentery"},
]


console.log('start');
window.addEventListener('load', () => {
  document.getElementById('message').value = designs[0].message
})
function setProductDetails(id)
{
    console.log('hei');
    if(id.charAt(0) === 'd'){
    let design = designs.find(design => design._id === id);
        document.getElementById('message').innerHTML = 
      design.message;}
    else if(id.charAt(0) === 'c') {let color = colors.find(color => color._id === id);
    document.getElementById('codeWindow').innerHTML = 
      `set=color[ ${color.color_value} ]
      colorize=color[global.color]`
    }
  }    


