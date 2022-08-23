console.log("youre in app.js");

let addBtn = document.getElementById("addBtn");

let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");

shownotes();
addBtn.addEventListener("click", function () {
  let notes = localStorage.getItem("storedNotes");
  let title = localStorage.getItem("storedTitles");
  date = localStorage.getItem("storedDate");
  let storedDate = new Date();
  let month = storedDate.getMonth() + 1; //months from 1-12
  let day = storedDate.getDate();
  let year = storedDate.getFullYear();
  newdate = year + "/" + month + "/" + day;

  
  if (notes == null || title == null || date == null) {
    notesObj = [];
    titleObj = [];
    dateObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
    dateObj = JSON.parse(date);
  }

  if (addTxt.value == "" || addTitle.value == "") {
    alert("Fill each details");
  } else {
    notesObj.push(addTxt.value);
    titleObj.push(addTitle.value);
    dateObj.push(newdate);
  }
  localStorage.setItem("storedNotes", JSON.stringify(notesObj));
  localStorage.setItem("storedTitles", JSON.stringify(titleObj));
  localStorage.setItem("storedDate", JSON.stringify(dateObj));
  addTxt.value = "";
  addTitle.value = "";
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("storedNotes");
  let title = localStorage.getItem("storedTitles");
  date = localStorage.getItem("storedDate");
  let storedDate = new Date();
  let month = storedDate.getUTCMonth() + 1; //months from 1-12
  let day = storedDate.getUTCDate();
  let year = storedDate.getUTCFullYear();
  newdate = year + "/" + month + "/" + day;
  if (notes == null || title == null || date == null) {
    notesObj = [];
    titleObj = [];
    dateObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
    dateObj = JSON.parse(date);
  }

  let shownote = document.getElementById("shownote");
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="card my-2 mx-2 notes" id="card" style="width:
     18rem;">
    
     <div class="card-body">
         <h5 class="card-title">Title: ${titleObj[index]}</h5>
         <p class="card-text" id="noteTxt">${element}</p>
         <button class="btn btn-primary" onclick="deletenote(${index})">Delete Note</button>
       <span>${dateObj[index]}</span>
     </div>
    </div>`;
  });

  if (notesObj.length != 0) {
    shownote.innerHTML = html;
  } else {
    shownote.innerHTML = "Add something to preview";
  }
}

function deletenote(index) {
  let notes = localStorage.getItem("storedNotes");
  let title = localStorage.getItem("storedTitles");
  date = localStorage.getItem("storedDate");
  let storedDate = new Date();
  let month = storedDate.getUTCMonth() + 1; //months from 1-12
  let day = storedDate.getUTCDate();
  let year = storedDate.getUTCFullYear();
  newdate = year + "/" + month + "/" + day;
  if (notes == null || title == null || date == null) {
    notesObj = [];
    titleObj = [];
    dateObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(title);
    dateObj = JSON.parse(date);
  }
  titleObj.splice(index, 1);
  notesObj.splice(index, 1);
  dateObj.splice(index, 1);

  localStorage.setItem("storedNotes", JSON.stringify(notesObj));
  localStorage.setItem("storedTitles", JSON.stringify(titleObj));
  localStorage.setItem("storedDate", JSON.stringify(dateObj));
  shownotes();
}

// search with element
let search = document.getElementById("searchTxt");

search.addEventListener("input", function () {
  let inputVal = search.value;
  let cardNote = document.getElementsByClassName("notes");
  Array.from(cardNote).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});