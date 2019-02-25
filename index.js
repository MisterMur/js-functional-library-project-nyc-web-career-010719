fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      // : (element, index, collection)
      // return (elent,index,collection)
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i <newCollection.length;i++)
      {
        callback(newCollection[i],i,newCollection)

        // debugger
      }
      return collection
    },

    map: function(collection,callback) {
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      let arrResult = []
      for (let i = 0; i <collection.length; i++)
      {
        arrResult.push(callback(collection[i]))
      }
      // console.log(arrResult ,"this")
      return arrResult

    },

    reduce: function(collection,callback,acc) {
      if (!acc)
        acc = 0

      for (let i = 0;i <collection.length;i++)
      {
        // console.log(acc)
        acc = callback(acc,collection[i],collection)
        // console.log(callback)
        // console.log(acc)
      }
      // console.log(acc)
      return acc

    },

    find: function(collection, predicate) {
      // let testPassed;
      for(let i =0;i<collection.length;i++)
      {
        if(predicate(collection[i])){
          return collection[i]

        }
      }
    },
    filter: function (collection,predicate){
      let newArr =[];
      for(let i =0;i<collection.length;i++)
      {
        if(predicate(collection[i])){
          newArr.push( collection[i])

        }
      }
      return newArr

    },
    size:function (collection){
      if(!(collection instanceof Array))
        collection = Object.keys(collection)
      let i=0;
      for(;i<collection.length;i++)
      {

      }
      return i;
    },
    first: function(collection,n){
      if(!(collection instanceof Array))
        collection = Object.keys(collection)
      if (!n)
        return collection[0]
      return collection.slice(0,n)
    },
    last: function(collection,n){

        if(!(collection instanceof Array))
          collection = Object.keys(collection)
        // debugger
        if (!n)
          return collection[collection.length-1]
          // debugger
        return collection.slice(-n)


    },
    compact: function(array){
      return array.filter(el=>!!el)
    },

    sortBy: function(array,callback){
      // let newArr=[]
      // let sortVal;
      // for(let i = 0;i<array.length;i++){
      //   if (callback(array[i])>sortVal)
      //   {
      //     console.log('in if')
      //     sortVal = callback(array[i])
      //     newArr.push(callback(array[i]))
      //   }
      // }
      // return newArr
      let newArr = array.map(e=>e)

      newArr = newArr.sort( function(a,b) {return callback(a) - callback(b) })
      return newArr

    },
    uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },
    keys: function(object){

      const keys = []
      for(let objKey in object)
      {
        keys.push(objKey)
      }
      return keys
    },
    values: function(object){

      const values = []
      for(let objValue in object)
      {
        values.push(object[objValue])
      }
      return values
    },

    functions: function(object){
      let funcArr= [];
      for (let value in object) {
        if (typeof(object[value]) === 'function')
          funcArr.push(value)
      }
      return funcArr
    },

    giveMeMore: function(){
      return true;
    }


  }
})()

fi.libraryMethod()
// debugger
