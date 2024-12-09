class Emp{
    constructor(name,roll,salary){
        this.name=name;
        this.roll=roll;
        this.salary=salary;
    }
     withdraw(amt){
        this.salary=this.salary-amt;
        return this;
    }
    deposit(amt){
        this.salary=this.salary+amt;
        return this;
    }

}
let raj = new Emp(raj,10,20000);

    //raj.deposit(5000).withdraw(2000);
        console.log("raj");

