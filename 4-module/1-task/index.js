function makeFriendsList(friends) {
debugger
  const ul = document.createElement('ul');
  
for (let item of friends){
  ul.insertAdjacentHTML("beforeEnd",`<li>${item.firstName} ${item.lastName}</li>`);
};

return ul;
}
