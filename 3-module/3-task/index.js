function camelize(str) {

  let arr = str.split("-");
  let firstEl = arr[0];

  arr = arr.slice(1);

  arr = arr.map(function(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
  });

  arr.unshift(firstEl);

  arr = arr.filter(function(item){
    return item.length > 1;
  });

  return arr = arr.join('');
}