const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about: "Тут я рассказываю о себе....",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
}

let users = {};
// const users = {
//   0: {name: "Валерия", lastname: "Енютина", id: 4},
//   1: {name: "Ипатий", lastname: "Яблочков", id: 14},
//   2: {name: "Серж", lastname: "Петров", id: 44},
//   3: {name: "Костя", lastname: "Тетерин", id: 45},
//   4: {name: "Влад", lastname: "Енютин", id: 22},
//   5: {name: "Евгения", lastname: "Петрова", id: 8},
// }


export function getUser() {
  // for(let i = 0; i < Object.keys(users).length; i++) {
  //   if (users[i].id == userId) return users[i];
  // }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://aroma.ambrose.p-host.in/getUsers");
  users = await response.json();
  console.log(users);
  return users;
}