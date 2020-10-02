import * as Commands from '../Commands';
import * as Types from "../types";
import Person from "../Person";

let state: Types.AppState = {
    persons: [
        new Person('1', 'YunSeong', 22, 'Korea')
    ]
}

const resolves = {
    Query: {
        people: () => new Commands.PrintPeopleCommand().run(state),
        person: (_, {id}) => new Commands.PrintPersonCommand(id-1).run(state)
    },
    Mutation: {
        addPerson: (_, {name, age, nation}) => {
            state = new Commands.AddCommand(name, age, nation).run(state);
            return state.persons[state.persons.length-1];
        }
    }
}

export default resolves;