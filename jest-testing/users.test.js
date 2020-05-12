import Users from './users';

jest.mock("node-fetch");

import fetch from "node-fetch";

test('should fetch users', async () => {

    const users = [{name: 'Bob'}];
    fetch.mockResolvedValue(users);

    return Users.all().then(data => {
        console.log(data);
        expect(data).toEqual(users)
    });
});
