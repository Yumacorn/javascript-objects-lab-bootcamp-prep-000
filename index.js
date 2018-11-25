var recipes2 = new Object();
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, "chicken", "orange")
console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, "chicken", "sesame")
console.log(recipes)

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign(object, {[key]:value})
}
/*

function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({}, object)
  console.log(object2)
  delete object2.key
  console.log(object2)
  return object2
}
deleteFromObjectByKey(recipes, 'mer')

//console.log(object2)
*/
