fetch('data.json')
.then(response => response.json())
.then(data => {
    const html = data.map(item =>`
    <div class = "item">
    <img src="${item.imageUrl}" alt="${"ADD IMAGE"}">
    <h3> ${item.Name}</h3>
    <p> ${item.ShortDesc}</p>
    <button>View</button>
    </div>
`).join('');

document.getElementById('data-display').innerHTML = html;
});