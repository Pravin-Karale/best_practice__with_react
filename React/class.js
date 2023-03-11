//class  

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
         let p1=new Person("Bitcode","pune");
        console.log(p1.whoAreYou());
