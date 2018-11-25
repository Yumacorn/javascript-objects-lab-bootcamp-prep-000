var recipes = {}
var recipes2 = new Object();

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

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object)
  delete clone.key
  return clone
}
deleteFromObjectByKey(recipes, "chicken")

console.log(object2)
