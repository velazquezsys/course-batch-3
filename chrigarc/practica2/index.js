'use strict';

const itemTable = document.getElementById('userTable');
const itemMensajes = document.getElementById('areaMensajes');
const urlApi = 'https://randomuser.me/api/?results=100';

const getUsers = () => {
    fetch(urlApi)
    .then(usuarios => usuarios.json())
    .then(json => {
        renderTable(json.results);
    }).catch(error => {
        console.log(error);
        itemMensajes.innerText = error;
    });
};

const renderTable = (info) =>{
    // console.log(info);
    for(const iterable of info){
        console.log(iterable);
        const fila = `<tr><td>${iterable.email}</td><td>${iterable.name.first} ${iterable.name.last}</td><td><img src="${iterable.picture.thumbnail}"></td></tr>`;
        itemTable.innerHTML += fila;
    }
};

getUsers();
