main();
 
async function main() {
  document.querySelector('.menu').addEventListener('click', async event => {
    if (!event.target.classList.contains('page')) {
      return;
    }
    const page = +event.target.dataset.page;
    const users = await getUsers(page);
    let content = "";
    for (let i = 0; i < users.length; i++) {
      content = content + `
        <div>
          <img src="${users[i].avatar}" alt="${users[i].first_name} ${users[i].last_name}">
          <p>${users[i].first_name} ${users[i].last_name}</p>
        </div>
      `;
    }
    document.querySelector('#app').innerHTML = content;
  });
}
 
async function getUsers(page) {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const responseData = await response.json();
  return responseData.data;
}