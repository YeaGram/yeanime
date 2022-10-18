export function MyRequest(target, url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let datas = data.data;
      target(datas);
    })
    .catch((err) => console.log(err));
}
