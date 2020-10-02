import Person from "./Person";

export interface AppState {
    persons: Person[]
}

export interface ActionAddPerson {
    type: 'addPerson',
    name: string,
    age: number,
    nation: string
}

export type Action = ActionAddPerson;