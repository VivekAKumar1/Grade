let a = prompt("Enter the value")
let grade;

if (a >=90 && a <=100)
{
    grade = "A"
}
else if (a >=70 && a <=89)
{
    grade = "B"
}
else if (a >=60 && a<=69)
{
    grade = "C"
}
else if (a >=50 && a<=59)
{
    grade = "D"
}
else if (a>=0 && a<=49)
{
    grade = "F"
}

console.log(grade)