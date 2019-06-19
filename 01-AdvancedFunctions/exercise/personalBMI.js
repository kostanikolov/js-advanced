function bmiCalculator(name, age, weight, height) {

    let heightInMeters = height / 100;
    let bmi = Math.round(weight / (heightInMeters * heightInMeters));
    let status;

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let personBMIStatus = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        },
        BMI: bmi,
        status,
    }

    if (status === 'obese') {
        personBMIStatus.recommendation = 'admission required';
    }

    return personBMIStatus;
}

console.log(bmiCalculator('Peter', 29, 75, 182));
console.log(bmiCalculator('Honey Boo Boo', 9, 57, 137));
