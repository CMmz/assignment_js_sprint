// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(x){
    // 1. set an input  2. sort array, big to small  3. return array[0]

      //var array = [83, 74, 372, 84, 8326, 832, 274, 63]

      x.sort(function (a, b) {
        return (b - a)
      })

      return x[0]

  },
  
  reversed: function(s){
    // 1. set an input variable  2. break into array  3. reverse array  4. join array with "" delimiter

      var reversed_string = s.split("").reverse().join("")

      return reversed_string

  },

  loudSnakeCase: function(q){
    // 1. set an input  2. create a punctuation array  3. iterate over the array a match scanner loop  3.5. On a successful find, delete the match characters from the string 4. break the phrase into an array 5. Capitalize each 1st letter  6. Rejoin with _

// This was the wrong order. First break the string into an array of words. Then you capitalize. Then break

      var revisions = q.replace(/[.,!:<>~`;?\/\@#'"$%^&*()]/g,"")
      revisions = revisions.replace(/\s\s+/g, ' ') //valuable lesson learned here. I would have missed this IRL

      revisions = revisions.split(" ")

      for (i = 0; i < revisions.length; i++) {
          revisions[i] = revisions[i].charAt(0).toUpperCase() + revisions[i].substr(1)
      }

      // substring returns a portion of the string from a specified start

      revisions = revisions.join('_')

      return revisions

      //ended up using regex replace to "replace" punctuation with "". This was much cleaner than using an array

  },

  compareArrays: function(k, l){
    // check for exact equality: same contents, same order
      //sounds like a simple iteration over a comparison operator

      if (k.length != l.length) {
          return false
      } else {
          for (var i = 0; i < k.length; i++) {
              if (k[i] != l[i]) {
                  return false
              }
          }
          return true
      }

      // One mistake I made on this one was returning true within the loop. That's bad, it cancels the loop on the first true. Remember how/where loops get cancelled to avoid this

  },

  fizzBuzz: function(n){

  // READ input n.
  // FOR i = 0; i <= n; i++,
      // array.PUSH(i)
  // FOR j === 0, j < array.length, j++
  //    IF (j % 15 = 0) {
  //        array[j] = FIZZBUZZ
  //      } ELSE IF (j % 5 = 0) {
  //        array[j] = BUZZ
  //      } ELSE IF j % 3 = 0 {
  //        array[j] = FIZZ
  //      }
  // }

  // several errors in the pseudo: i should start at 1. j needs to include n in the loop. The modulus calc needs to equal, not assign 0. j + 1 is the correct evaluation, because of the index shift.

      //n = 7
      var arr = []

      for (var i = 1; i <= n; i++) {
          arr.push(i)
      }

//The array now has all the numbers
// Find out why arr = arr.push(i) caused a type error

      for (var j = 0; j <= arr.length; j++) {
          if ((j + 1) % 15 === 0) {
              arr[j] = "FIZZBUZZ"
          } else if ((j + 1) % 5 === 0) {
              arr[j] = "BUZZ"
          } else if ((j + 1) % 3 === 0) {
              arr[j] = "FIZZ"
          }
      }

// Initially I messed up the calc. j % 3 == 0 does not trigger a string reassignment on j[2] because j[2] needs 1 added to it

// Solution appears correct but is not registering true

  },

  myMap: function(array1){
    //

      //var array1 = [3, 8, 2, 9]

      var factory = array1.map(function (x) {
          return x * 2
      })

      //console.log(factory)


  },

  primes: function(){  

    // your code here

      var prime_detector = function (input) {

              // put all the downstream numbers except 1/0 into an array for iterative evaluation later
              var downstream_numbers = []

              for (var i = input - 1; i > 1; i--) {
                  downstream_numbers.push(i)
              }


              var prime_numbers = [] // This array will take the prime numbers. I'll return it at the end to complete the subroutine

              //iterate through the list of downstream numbers
              for (var i = downstream_numbers[0]; i <= downstream_numbers.length; i = downstream_numbers[i++]) {

                  //Detect a clean division by ANY lower number between (but not including) 1 and input. But DO NOT return false; that kills the loop. Just ignore it (blank if, actionable else)

                  for (var j = 2; j < input; j++) {
                      if (x % j === 0) {

                          // return false -- NO. This has been cancelling the loop. That's why it keeps returning empty. Just leave the if blank
                      } else {

                          prime_numbers.push(downstream_numbers[i])
                      }
                  }
                  return prime_numbers
              }

              console.log(prime_detector(30))



          },
}