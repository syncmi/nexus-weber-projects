// custom functions
// calculate led cost

function calculate() {
    const selectedInstallation = document.querySelector('input[name="installation_type"]:checked').value;
    // console.log(selectedInstallation); // "indoor" or "outdoor"
    if (selectedInstallation == 'indoor') {
        let mvd = parseFloat(document.getElementById('mvd').value);
        let width = parseFloat(document.getElementById('width').value);
        let height = parseFloat(document.getElementById('height').value);
        var area = width * height;
        var price = 0;
        if (mvd > 1 && mvd <= 1.4) {
            model = 'p1.2';
            price = area * 1000
        } else if (mvd > 1.4 && mvd <= 1.6) {
            model = 'p1.5';
            price = area * 1100
        } else if (mvd > 1.6 && mvd <= 1.8) {
            model = 'p1.8';
            price = area * 1200
        } else if (mvd > 1.8 && mvd <= 2.4) {
            model = 'p2.5';
            price = area * 1300
        } else if (mvd > 2.4 && mvd <= 3.0) {
            model = 'p3.0';
            price = area * 1400
        } else if (mvd > 3.0 && mvd <= 4.0) {
            model = 'p4.0';
            price = area * 1500
        } else if (mvd > 4.0 && mvd <= 6.5) {
            model = 'Avl in Outdoor';
            price = '---'
        } else {
            model = 'not available';
            price = '---'
        }
    } else if (selectedInstallation == "outdoor") {
        let mvd = parseFloat(document.getElementById('mvd').value);
        let width = parseFloat(document.getElementById('width').value);
        let height = parseFloat(document.getElementById('height').value);
        var area = width * height;
        var price = 0;
        if (mvd > 1 && mvd <= 1.4) {
            model = 'Avl in Indoor';
            price = '---'
        } else if (mvd > 1.4 && mvd <= 1.6) {
            model = 'Avl in Indoor';
            price = '---'
        } else if (mvd > 1.6 && mvd <= 1.8) {
            model = 'Avl in Indoor';
            price = '---'
        } else if (mvd > 1.8 && mvd <= 2.4) {
            model = 'p2.5';
            price = area * 1300
        } else if (mvd > 2.4 && mvd <= 3.0) {
            model = 'p3.0';
            price = area * 1400
        } else if (mvd > 3.0 && mvd <= 4.0) {
            model = 'p4.0';
            price = area * 1500
        } else if (mvd > 4.0 && mvd <= 6.5) {
            model = 'p6.0';
            price = area * 1600
        } else {
            model = 'not available';
            price = '---'
        }
    }

    console.log(area)
    console.log(model)
    console.log(price)
    document.getElementById('area').textContent = area;
    document.getElementById('led-model').textContent = model;
    document.getElementById('price').textContent = price;

    document.getElementById('result').hidden = false;
}