class Person {
    
    private id: string;
    private _name: string;
    private _age: number;
    private _nation: string;

    constructor(id: string, _name: string, _age: number, _nation: string) {
        this.id = id;
        this._name = _name;
        this._age = _age;
        this._nation = _nation;
    }

    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get nation() {
        return this._nation;
    }
    set name(_name: string) {
        this._name = _name;
    }
    set age(_age: number) {
        this._age = _age;
    }
    set nation(_nation: string) {
        this._nation = _nation;
    }
    toString() {
        return `번호 : ${this.id},
                성명 : ${this._name},
                나이 : ${this._age},
                국적 : ${this._nation}
        `
    }
}

export default Person;