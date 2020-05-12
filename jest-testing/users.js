import fetch from "node-fetch";

class Users {
    static all() {
        return fetch('https://jsonplaceholder.typicode.com/users');
    }
}

export default Users;
