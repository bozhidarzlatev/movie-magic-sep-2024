import {connect} from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/magic-movies';


export default async function mongooesInit() {
    
    try {
        await connect(dbUrl);
        console.log(`Successfull connectedto DB!`);
    
    } catch (error) {
        console.log(error.message);
        
    }
}