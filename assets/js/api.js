const base_Url = "https://monkumorowali.my.id/api_monku/api/";
const apiKey = "monitoring1234";

function getData() {
  if ("caches" in window) {
    caches.match(`${base_Url}data`).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          setData(data);
        });
      }
    });
  }

  fetch(`${base_Url}data`, {
    mode: 'no-cors',
    headers: {
      key: apiKey,
      'Access-Control-Allow-Origin' :  '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => setData(responseJson))
    .catch((error) => console.log(error));
}
