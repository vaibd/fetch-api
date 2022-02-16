const getDataButton = document.querySelector(".getData");
const postDataButton = document.querySelector(".postData");
const info = document.querySelector(".info");

getDataButton.addEventListener("click", () => {
  getData();
});

postDataButton.addEventListener("click", () => {
  postData();
});

function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function postData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let info = '{"name":"vaib","salary":"123","age":"23"}';
  const params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: info,
  };
  fetch(url, params)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayData(data) {
  console.log(data);

  let liTag = "";
  data.forEach((element) => {
    liTag += `
       <li> Id: ${element.id} 
       <br>
       Post: ${element.title}</li>
       <br>
       `;
  });
  info.innerHTML = liTag;
}
