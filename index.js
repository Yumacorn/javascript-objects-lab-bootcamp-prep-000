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
  //var clone = Object.assign({}, object)
  recipes2 = Object.assign({}, object)
  console.log("deleting")
  delete recipes2.key
  return recipes2
}
recipes2 = deleteFromObjectByKey(recipes, "chicken")

console.log(recipes)
