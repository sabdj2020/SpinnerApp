import {Deserializable} from "./deserializable.model";
export class User implements Deserializable {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(username: string, password: string, firstName: string, lastName: string) {
        this.id = null;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    deserialize(input: any): this{
        Object.assign(this, input);
        return this;
    }
}
