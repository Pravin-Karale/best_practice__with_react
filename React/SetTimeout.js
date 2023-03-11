//settimeout and cluoser and arrofunction
        let obj={
            name:"Bitcode",
            sayLater:function(){

             //let self=this;

                setTimeout(()=>{
                    console.log(`Welcome ${this.name}`);
                },1000);
            }
          }
        obj.sayLater();
