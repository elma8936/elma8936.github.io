//problem 1
const employeeDetails = {
    "employees": [
        {
            "Name" : "Sam",
            "Department" : "Tech",
            "Designation" : "Manager",
            "Salary" : 40000,
            "RaiseEligible" : "True",
        },
        {
            "Name" : "Mary",
            "Department" : "Finance",
            "Designation" : "Trainee",
            "Salary" : 18500,
            "RaiseEligible" : "True",
        },
        {
            "Name" : "Bill",
            "Department" : "HR",
            "Designation" : "Executive",
            "Salary" : 21200,
            "RaiseEligible" : "False",
        }
    ]
};

console.log("Problem 1:");
console.log(employeeDetails.employees);

//problem 2
const company = {
    "companyName" : "Tech Stars",
     "website" : "www.techstars.site",
    "employees" : employeeDetails,
}

console.log("Problem 2:");
console.log(company);


//problem 3
employeeDetails.employees.push(
    {
        "Name" : "Anna",
        "Department" : "Tech",
        "Designation" : "Executive",
        "Salary" : 25600,
        "RaiseEligible" : "False",
    }
)

console.log("Problem 3:")
console.log(employeeDetails.employees);

//problem 4

let totalSalary = 0;
for( let i = 0; i < employeeDetails.employees.length;i++){
    totalSalary += employeeDetails.employees[i].Salary;
}

console.log("Problem 4:");
console.log(totalSalary);


//problem 5

let temp = 0;
for( let i = 0; i < company.employees.employees.length; i++){
    if(company.employees.employees[i].RaiseEligible === "True"){
        temp = company.employees.employees[i].Salary * .1;
        company.employees.employees[i].Salary += temp;
        company.employees.employees[i].RaiseEligible = "False";
    }
}

console.log("Problem 5:");
console.log(company.employees.employees);


//problem 6

const arr = ['Anna', 'Sam'];
for(let i = 0; i < employeeDetails.employees.length; i++)
{
    if(arr.includes(employeeDetails.employees[i].Name)){
        employeeDetails.employees[i].wfh = "True";
    }
    else{
        employeeDetails.employees[i].wfh = "False";
    }
}

console.log("Problem 6:");
console.log(employeeDetails.employees);

