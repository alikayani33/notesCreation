const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



function update(){
    localStorage.setItem("notes" , notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable",true);
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function (e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.addEventListener("keyup",update)
               
            
        })
    }
})
document.addEventListener("keydown", event => {
    // Check if the Enter key was pressed
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter behavior

        // Create a line break element
        const lineBreak = document.createElement("br");

        // Get the selection inside the contenteditable element
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        // Insert the line break at the current cursor position
        range.deleteContents(); // Optional: Clear any selected text
        range.insertNode(lineBreak);

        // Move the cursor after the line break
        range.setStartAfter(lineBreak);
        range.setEndAfter(lineBreak);
        selection.removeAllRanges();
        selection.addRange(range);
    }
});


