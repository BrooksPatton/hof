// forEach
// filter
// map
// reduce

var vietnameseFoods = ['Pho', 'Dong Khan', 'Bahn Mi', 'Bun', 'Boba Tea'];

console.log('--------- For Each ---------');

/**
 * Run the forEach function, pass it the vietnameseFoods array and a callback function. The callback function takes the current element, index value, and array as properties.
 */
forEach(vietnameseFoods, function(element, i, arr){
  /**
   * Log out the current element
   */
  console.log(element);
});

/**
 * The forEach() method executes a provided function once per array element.
 */
function forEach(arr, fn) {
  /**
   * For each item in the array arr
   */
  for (var i = 0; i < arr.length; i++) {
    /**
     * Run the callback function and pass it the current element, index, and array as arguments
     */
    fn(arr[i], i, arr);
  }
}

console.log('--------- Filter ---------');

/**
 * Run the filter function, pass it the vietnameseFoods array and a callback function. The callback function takes the current element, index value, and array as properties.
 */
var newArray = filter(vietnameseFoods, function(el, i, arr){
  /**
   * If the first letter of the current food is the letter 'B'
   */
  if(el[0] === 'B') {
    /**
     * Return the boolean true
     */
    return true;
  }

  /**
   * since there is no return statement, undefined is returned by default
   */
});

console.log(newArray);

/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * @method filter
 * @param  {array}   arr  The Array that is being filtered
 * @param  {Function} fn  Callback function that is being used to check if the current item should go into the end result
 */
function filter(arr, fn) {
  /**
   * declare a new array and initialize it to an empty array for later use.
   */
  var newArray = [];

  /**
  * Begin looping through the provided array
  */
  for(var i = 0; i < arr.length; i++) {
    /**
     * If the return value of the callback function is truthy
     */
    if(fn(arr[i])) {
      /**
       * Add the current array element into the new array
       */
      newArray.push(arr[i]);
    }
  }

  /**
   * We are finished filtering, return the new array
   */
  return newArray;
}
