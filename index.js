var recipes = {}
var recipes2 = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, "far", "mer")
console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, "ro", "mer")

console.log(recipes)

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign(object, {[key]:value})
}


function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({}, object)

  delete object2.key
  return object2
}

console.log(deleteFromObjectByKey(recipes, 'mer'))
//console.log(object2)
