/*Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like 
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if 
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if 
any).*/
type Employee = {
    name: string;
    department: string; 
    role:  "Manager" | "Engineer" | "Intern";
    contact? : {
        phone: number;
        email: string;
    }
    skills: string[];
};
const Employee1 : Employee = {
    name: "Abeeha",
    department: "It services",
    role:  "Intern",
    contact:{
        phone:  12345678,
        email:  "Abeeha123@gmail.com"
    },
    skills: ["typescript", "javascript", "python"]
}
console.log(Employee1);
