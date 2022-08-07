// let FormData = require('form-data');
// const axios = require('axios');

// Content-Type: text/html; charset=utf-8
// Content-Type: multipart/form-data; boundary=something

// const headers = {
//     // 'Content-Type': 'multipart/form-data',
// };
//
// // const bodyData = new FormData();
//
// let formData = new FormData();
// formData.append('phone', '+14073128899');
// formData.append('lastName', 'Zukenberg');
// formData.append('firstName', 'Mark444');
// formData.append('id', '14zz7JXNb08ivl5hvZuB');
//
//
// const url = 'https://phone.smrt.studio/if3/contact/nUKJeBW3sZBagGIpX22M';
// // const data =  '{"phone":"+14073128899","lastName":"Zukenberg","firstName":"Mark444","id":"14zz7JXNb08ivl5hvZuB"}';
//
// axios.post(url, {data: formData}).then(response => {
//     console.log('DATA', JSON.stringify(response));
// }).catch(err => {
//     console.log('ERROR', JSON.stringify(err));
// });


let FormData = require('form-data');
const axios = require('axios');

const url = 'https://phone.smrt.studio/if3/contact/nUKJeBW3sZBagGIpX22M';
let formData = new FormData();
formData.append('phone', '+14073128899');
formData.append('lastName', 'Zukenberg');
formData.append('firstName', 'Mark444');
formData.append('id', '14zz7JXNb08ivl5hvZuB');

const headers = {'Content-Type': `multipart/form-data; boundary=${formData._boundary}`};
axios.post(url, formData, {headers: headers})
    .then(({ data }) => data)
    .then(response => {
        console.log('DATA', response);
    }).catch(err => {
    console.log('ERROR', err);
});
