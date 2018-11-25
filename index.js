var recipes = {}

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

function deleterFromObjectByKey(object, key) {
  object2 = Object.assign({}, object)
  delete object.key
  return object2
}
