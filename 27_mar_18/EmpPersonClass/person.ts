    export class Person {
        protected name: string;
        constructor(name: string) 
        { 
            this.name = name; 
        }
        setName(name: string)
        {
            this.name= name;
        }

        getName(): string
        {
            return this.name;
        }
    }
    export default Person;
