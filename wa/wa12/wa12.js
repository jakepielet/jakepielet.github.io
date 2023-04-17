// prob 1
employees =  
    [
      {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "manager",
        "salary": 40000,
        "raiseElig": true
      },
      {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseElig": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseElig": false
      }

    ];

  console.log("prob 1: "); console.log(employees);


// prob 2

company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees,
};

console.log("prob 2: "); console.log(company);

//3. A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//Anna, Tech, Executive, 25600, false
employees.push(      {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseElig": false
  })
console.log("prob 3: "); console.log(company);

// prob 4
let totalSalary = 0;
for(people of company.employees)
{
    totalSalary += people.salary;
}
console.log("prob 4: "); console.log("Total salary =", totalSalary);

//prob 5
console.log("prob 5:");

for(people of company.employees)
{
    if(people.raiseElig === true)
    {
        people.salary = people.salary * 0.1; //rasie by ten percent
        people.raiseElig = false;
        console.log("raised salary of", people.firstName);
        //obj1, /* …, */ objN
    }
    console.log(people);
}

//prob 6
for(people of company.employees)
{
    if(people.firstName === "Anna" || people.firstName === "Sam")
    { people.wfh = true; }
    else
    { people.wfh = false; }
}

console.log("prob 6:"); console.log(company.employees);