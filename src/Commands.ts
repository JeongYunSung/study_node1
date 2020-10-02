import Person from "./Person";
import * as Types from "./types";

export abstract class Command {
    private _key: string;
    
    constructor(_key: string) {
        this._key = _key;
    }

    get key() {
        return this._key;
    }

    set key(_key: string) {
        this._key = _key;
    }

    abstract run(state: Types.AppState) : void | Person | Person[] | Types.AppState;
}

export class AddCommand extends Command {

    private name: string;
    private age: number;
    private nation: string;

    constructor(name: string, age: number, nation: string) {
        super('Add');
        this.name = name;
        this.age = age;
        this.nation = nation;
    }

    run(state: Types.AppState): Types.AppState {
        const person: Person = new Person(
            String(state.persons.length+1),
            this.name,
            this.age,
            this.nation);
        state = {
            ...state,
            persons: [
                ...state.persons,
                person
            ]
        }
        return state;
    }
}

export class PrintPersonCommand extends Command {

    private id: number;

    constructor(id: number) {
        super('PrintPerson');
        this.id=id;
    }

    run(state: Types.AppState): void | Person {
        if(state.persons.length > this.id && this.id >= 0) {
            return state.persons[this.id];
        }
    }
}

export class PrintPeopleCommand extends Command {

    constructor() {
        super('PrintPeople');
    }

    run(state: Types.AppState): Person[] {
        return state.persons;
    }
}