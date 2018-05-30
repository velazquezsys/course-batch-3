const modal = document.getElementById('modal');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close');
const bodyDiv = document.getElementById('bodyDiv');
bodyDiv.innerText = 'There is not Users';
const headers = new Headers();
headers.append('Content-Type', 'application/json');
const options = { method: 'GET',
    headers: headers };
const table = document.getElementById('tablita');
const promise = () => {
    fetch('https://randomuser.me/api/', options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => {
            response.json().then(data => {
                fillTable(data.results);
            });

        }).catch(error => {
            console.log(error);
            modalContainer.style.display = 'block';
            modal.style.display = 'block';
            console.log(error);
        });
};

const fillTable = (users) => {
    let tblBody = document.createElement("tbody");
    for(let i = 0; i < users.length; i++){
        let row = document.createElement("tr");
        let columName = document.createElement("td");
        columName.appendChild(document.createTextNode(users[i].name.first));
        row.appendChild(columName);
        let columLastName = document.createElement("td");
        columLastName.appendChild(document.createTextNode(users[i].name.last));
        row.appendChild(columLastName);
        let columCell = document.createElement("td");
        columCell.appendChild(document.createTextNode(users[i].cell));
        row.appendChild(columCell);
        tblBody.appendChild(row);
    }
    table.appendChild(tblBody);
}


close.addEventListener('click', (e) => {
    modal.style.display = 'none';
    modalContainer.style.display = 'none';
});

modalContainer.addEventListener('click', (e) => {
    if(modalContainer == e.target){
        modalContainer.style.display = 'none'
        modal.style.display = 'none';
    }
})


promise();