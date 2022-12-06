
window.addEventListener('load',()=>{
    /*const params = (new URL(document.location)).searchParams;
    const Name = params.get('Name');
    const id = params.get("id");
    const email = params.get("email");*/

    const Name = localStorage.getItem('Name');
    const id = localStorage.getItem('id');

    document.getElementById('Name').textContent = Name;
    document.getElementById('id').textContent = id;
});
