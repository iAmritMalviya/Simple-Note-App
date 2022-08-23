let addBtn = document.getElementById('addBtn')
let addTxt = document.getElementById('addTxt')
let addTitle = document.getElementById('addTitle')
console.log('youre in app2');

shownotes()
addBtn.addEventListener('click', function () {
    let date = new Date();
    let notes = localStorage.getItem('storedNotes')
    if (notes == null) {
        notesObj = []
     
    } else {
        notesObj = JSON.parse(notes)
    }
    myObj = {
        title: addTitle.value,
        text: addTxt.value,
        date: date
    }
    notesObj.push(myObj)
    localStorage.setItem('storedNotes', JSON.stringify(notesObj))
    addTxt.value = ''
    addTitle.value = ''
 
    shownotes();

})

function shownotes() {
    let notes = localStorage.getItem('storedNotes')
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
   let shownote = document.getElementById('shownote')
   let html = ''
   notesObj.forEach(function(element, index){
     html  += `<div class="card my-2 mx-2 notes" id="card" style="width:
     18rem;">
    
     <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p class="card-text" id="noteTxt">${element.text}</p>
         <button class="btn btn-primary" onclick="deletenote(${index})">Delete Note</button>
         <span>${element.date}</span>
     </div>
    </div>`
       
   });
    
     if (notesObj.length != 0) {
         
         shownote.innerHTML = html 
     } else {
         shownote.innerHTML = 'Add something to preview'
     }  
    
}

function deletenote(index) {
    let notes = localStorage.getItem('storedNotes')
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)


    localStorage.setItem('storedNotes', JSON.stringify(notesObj))
    shownotes();
}

// search with element
let search = document.getElementById('searchTxt')

search.addEventListener('input', function () {
    let inputVal  = search.value;
    let cardNote = document.getElementsByClassName('notes')
    Array.from(cardNote).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
            
        }
        
    })
    
    
})