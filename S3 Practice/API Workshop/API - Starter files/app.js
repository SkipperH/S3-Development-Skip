// const url = 'users.json';
const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {

    const response = await fetch(url);
    if (!response.ok) {
        const message = 'an error has occured. Status: ${response.status}';
        throw new Error(message);
    }

    const data = await response.json();
    return data;
};

const ul = document.querySelector('#persons-list');

getUsers()
    .then(data => {
        console.log('Resolved: ', data);

        let users = data;

        users.map(user => {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');
            let address = document.createElement('h3');

            name.textContent = user.name;
            email.textContent = user.email;
            address.textContent = user.address.suite;

            li.appendChild(name);
            li.appendChild(email);
            li.appendChild(address);
            ul.appendChild(li);
        });
    })

    // const ul2 = document.querySelector('#persons-listv2');

    // getUsers()
    //     .then(data => {
    //         console.log('Resolved: ', data);

    //         let users = data;

    //         users.map(user => {
    //             let li = document.createElement('li');
    //             let name = document.createElement('h2');
    //             let email = document.createElement('span');
    //             let address = document.createElement('h3');

    //             name.textContent = user.name;
    //             email.textContent = user.email;
    //             address.textContent = user.address.suite;

    //             li.appendChild(name);
    //             li.appendChild(email);
    //             li.appendChild(address);
    //             ul2.appendChild(li);
    //         });
    //     })

    .catch(err => console.log('Rejected: ', err));