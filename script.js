let addT = document.getElementById('add');
let container = document.getElementById('con');

if (window.innerWidth < 600){
    alert("Use Desktop site ✅ for better experience. Enjoy!");
}

window.addEventListener('load', function() {
    let savData=JSON.parse(localStorage.getItem('notes'))||[];
    savData.forEach(element => {
        add(element);
    });
});

function add(text="") {
    let note = document.createElement('textarea');
    note.setAttribute('maxlength', '200');
    note.setAttribute('placeholder', '...');
    note.classList.add('text');
    note.value = text;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "X";

    note.style.position = "relative"; // Ensure textarea is positioned

    // 🔹 Append delete button inside the textarea container
    let wrapper = document.createElement("div");
    wrapper.style.position = "relative"; // Wrapper for positioning
    wrapper.style.display = "inline-block";
    wrapper.classList.add("wrapper");
    wrapper.appendChild(note);
    wrapper.appendChild(deleteBtn);

    // Append wrapper (which contains textarea + delete button)
    container.appendChild(wrapper);

    note.addEventListener('input', savData );
    
    
    // Delete function
    deleteBtn.addEventListener("click", function del() {
        wrapper.remove();
        savData();
    });
}

addT.addEventListener('click',function (){
     add(); 
     savData();
    });


function savData() {    
    let allnotes = Array.from(document.querySelectorAll('.text')).map(note => note.value);
    localStorage.setItem('notes', JSON.stringify(allnotes));    
}