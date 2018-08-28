// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

let videos;

function addVideo() {
  var video = document.getElementById("clicked").value;
  videos.unshift(video);

  for (i = 0; i < videos.length; i++) {
    var Table = document.getElementById("head");
    Table.innerHTML = "";
  }
  loadGrid();
}

function getVideosFromStorage() {
  if (localStorage.getItem("items")) {
    videos = JSON.parse(localStorage.getItem("items"));
  } else {
    videos = [];
  }
  loadGrid();
}

function saveVideosToStorage() {
  localStorage.setItem("items", JSON.stringify(videos));
}

function deleteVideo(num) {
  videos.splice(num, 1);

  for (i = 0; i < videos.length; i++) {
    var Table = document.getElementById("head");
    Table.innerHTML = "";
  }
  loadGrid();
}

function loadGrid() {
  for (i = 0; i < videos.length; i++) {
    var num = i + 1;
    htmlString =
      "<tr>" +
      '<th scope="row">' +
      num +
      "</th>" +
      "<td>" +
      videos[i] +
      "</td>" +
      '<td><a href="' +
      videos[i] +
      '" class="btn btn-success btn-block">Play Video</a></td>' +
      '<td><button onClick="deleteVideo(' +
      i +
      ')"class="btn btn-danger btn-block">Delete Video</button></td></tr>';
    document.getElementById("head").innerHTML += htmlString;
  }
}
