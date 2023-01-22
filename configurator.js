// set data structures
const colors = [
  {"_id": "c1",
  "color_name": "blue", 
  "color_value": "#165895",
  "image_name": "blue.png"},
  {"_id": "c2",
  "color_name": "teal", 
  "color_value": "#509F9B",
  "image_name": "teal.png"},
  {"_id": "c3",
  "color_name": "forest", 
  "color_value": "#6F8248",
  "image_name": "forest.png"},
  {"_id": "c4",
  "color_name": "pink", 
  "color_value": "#EFC7D1",
  "image_name": "pink.png"},
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
    document.getElementById('tumbler').src= color.image_name;
    }
  }    


