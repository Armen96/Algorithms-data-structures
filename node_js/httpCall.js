const axios = require('axios');


axios.post(
    'https://api.dev.printgenie2.io/orders/single-send/webhook/rjpM28OGVFiFAPoDNIVXVyN9jwVSgCXkZi58xIspTgOl299y0itVq3AyElyb/2091/PRINT-16',
    {
        "contacts": [
            {
                "contact_name": "John",
                "mail_address": "123 random",
                "contact_email": "contact.email",
                "phone_no": "contact.phone",
                "mail_city": "contact.city",
                "mail_zip": "contact.zip",
                "mail_state": "contact.state",
                "address1": "opp.street_address",
                "zip": "opp.zip_code",
                "city": "opp.city",
                "state": "opp.state"
            }
        ]
    }
).then(data => {
    console.log('da', data);
}).catch(err => console.log(err.response.data))
