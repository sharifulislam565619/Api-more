const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadBuddies()

const displayBuddies = (data) => {
    const buddies = data.results;
    for (const buddy of buddies) {
        console.log(buddy)
        const allBuddies = document.getElementById("buddies");
        const p = document.createElement("p")
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}    
        Email: ${buddy.email}`
        allBuddies.appendChild(p)

    }

}