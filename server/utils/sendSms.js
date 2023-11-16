import twilio from 'twilio';
const accountSid = '';
const authToken = '';

const client = new twilio(accountSid, authToken);

async function sendSMS() {
    try {
        let message = await client.messages
            .create({
                body: 'Dear customer,this is your verification code to log in to your account.This code Expires in next 5 mins.',
                from: '+',
                to: '+918919142747'
            })
        console.log(message.sid);
    } catch (error) {
        console.error(error);
    }
}

sendSMS();