var recipes = {}
var recipes2 = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, "chicken", "orange")
console.log(recipes)
recipes = updateObjectWithKeyAndValue(recipes, 'second chicken', "sesame")
console.log(recipes)

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign(object, {[key]:value})
}

function deleteFromObjectByKey(object, key) {
  console.log(recipes2)
  console.log(object)
  recipes2 = object
  delete recipes2[key]
  console.log(recipe2)
  return recipes2
}

deleteFromObjectByKey(recipes, "chicken")
//console.log(recipes2)
function destructivelyDeleteFromObjectByKey(object, key) {

}
