//class    base class

        class Person{
            constructor(firstName,lastName){
                this.firstName=firstName;
                this.lastName=lastName;
            }
            name()
            {
                return`${this.firstName} 
                ${this.lastName}`;
            }
            whoAreYou(){
                return`i am ${(this.name())
            }`;
        }
    }
//         // let p1=new Person("Bitcode","pune");
//         // console.log(p1.whoAreYou());

// //inhritance 

        class Student extends Person
        {
            constructor(firstName,lastName,courseName)
            {
                super(firstName,lastName);
                this.courseName=courseName;
            }
            whoAreYou()
            {
                return `${super.whoAreYou()}
                and I am Studying ${this.courseName}`;
            }
        }
        let s1=new Student("bitcode","pune","react");
        console.log(s1.whoAreYou());