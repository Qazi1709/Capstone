import twilio from 'twilio';
const accountSid = 'ACb11a4a31b9efb9d78245f332d49cc8d6';
const authToken = '55ddc5b48c702cabaa5daef797f40644';

const client = new twilio(accountSid, authToken);

async function sendSMS() {
    try {
        let message = await client.messages
            .create({
                body: 'Dear customer,this is your verification code to log in to your account.This code Expires in next 5 mins.',
                from: '+16562188446',
                to: '+918919142747'
            })
        console.log(message.sid);
    } catch (error) {
        console.error(error);
    }
}

sendSMS();