const loadUsers=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayUsers(data))
}
const displayUsers=(data)=>{
    const buddyContainer = document.getElementById('buddies');
    const buddies = data.results;
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerHTML=`<b>Name : </b> ${buddy.name.title}, ${buddy.name.first} ${buddy.name.last}
        <b>E-mail : </b> ${buddy.email}`
        buddyContainer.appendChild(p);
        /* const p = document.createElement('p');
        p.innerText=buddy.email;
        buddyContainer.appendChild(p); */
    }
};
loadUsers();