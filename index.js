
const Name = document.getElementById('Name');
const id = document.getElementById('id');
const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstNameValue = Name.value;
    const idValue = id.value;

    localStorage.setItem('Name',firstNameValue);
    localStorage.setItem('id',idValue);

    window.location.href = "userprofile.html"

})