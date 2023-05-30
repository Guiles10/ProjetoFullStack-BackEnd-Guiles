import { randomUUID } from "node:crypto";
import * as moment from 'moment';


export class Contact {
    readonly id: string;
    
    name: string;

    email: string;

    telefone: string;

    readonly createdAt: string | null;

    user_id?: string;

    constructor(){
        this.id = randomUUID();
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
