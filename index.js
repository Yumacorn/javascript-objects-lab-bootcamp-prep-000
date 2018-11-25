var recipes = {}
var recipes2 = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

console.log(recipes + "1")
recipes = updateObjectWithKeyAndValue(recipes, "chicken", "orange")
console.log(recipes + "2")
recipes = updateObjectWithKeyAndValue(recipes, "second chicken", "sesame")
console.log(recipes)

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign(object, {[key]:value})
}

function deleteFromObjectByKey(object, key) {
var clone = object
console.log(clone)
}
recipes2 = deleteFromObjectByKey(recipes, "chicken")

console.log(recipes)
