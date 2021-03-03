function showSalary(users, age) {

  let ageMax = age;

  let arrAge = users.filter(function(item){ // filtering array by age;
    return item.age <= ageMax;
  })

  return str = arrAge.map(function(item){
    return item.name + ',' + ' ' + item.balance;
  }).join('\n')


}
