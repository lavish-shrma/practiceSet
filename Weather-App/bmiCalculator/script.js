const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid ${weight}`;
    } else {
        const BMI = (weight / ((height * height) / 10000).toFixed(2));

        const getBmiCategory = (BMI) => {
            if (BMI < 18.5) {
                return 'You are underweight;'
            } else if (BMI < 25) {
                return 'You are in healthy range;'
            }
            else if (BMI < 30) {
                return 'You are overweight;'
            } else {
                return 'You are in the obese range;'
            }
        }
        // result
        results.innerHTML = `
        <span>BMI: ${BMI}</span>
        <p>${getBmiCategory(BMI)}</P>
        `;
    }

})