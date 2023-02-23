var uploadFile = document.getElementById("uploadButton");
uploadFile.onclick = () => {
  let fileElement = document.getElementById("fileInput");

  // check if user had selected a file
  if (fileElement.files.length === 0) {
    alert("Silahkan pilih lagu");
    return;
  }

  let file = fileElement.files[0];

  let formData = new FormData();
  formData.set("file", file);

  axios
    .post("http://localhost:3000/assets/musics", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`upload process: ${percentCompleted}%`);
      },
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.data.url);
    });
};

// function SavePhoto(e) {
//   let user = { name: "john", age: 34 };
//   let xhr = new XMLHttpRequest();
//   let formData = new FormData();
//   let photo = e.files[0];

//   formData.append("user", JSON.stringify(user));
//   formData.append("photo", photo);

//   xhr.onreadystatechange = (state) => {
//     console.log(xhr.status);
//   }; // err handling
//   xhr.timeout = 5000;
//   xhr.open("POST", "/assets/musics");
//   xhr.send(formData);
// }
