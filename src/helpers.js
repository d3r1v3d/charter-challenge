//Prep for sort string comparisons. Make all lower case and remove whitespace
export const prep = (value) => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {return value.toLowerCase().replace( /\s+/g, '');}
  return 0;
};

// accepts an object and a string of dot notation to return the value. 
export const getVal = (obj, prop) => {
  const val = prop.split('.').reduce((o, i) => o[i], obj);
  return val ? prep(val) : 0;
};

//Takes an array of objects returns it sorted alphabetically by a given property
export const sortObjectArray = (unsortedObjArr, prop = 'name', reverse = false) => {
  let objArr = unsortedObjArr.slice();
  const direction = reverse ? -1 : 1;
  return objArr.sort((a,b)=>{
    var aVal = getVal(a, prop);
    var bVal = getVal(b, prop);
    if (aVal < bVal) return -1 * direction;
    if (aVal > bVal) return 1 * direction;
    return 0;
  });
};
