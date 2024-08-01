// document.getElementById('demo').innerHTML

function generate(){
    const height = document.getElementById('ipth').value ** 2;
    const weight = document.getElementById('iptw').value;

    const result = weight / height ;

    if(result < 18.5){
        document.getElementById('demo').innerHTML = `Your BMI is Underweght. \n Your BMI is ${result}`;
        document.getElementById('demo').innerHTML = `Your BMI is Normal. \n Your BMI is ${result}`;
    }else if(result < 29.9){
        document.getElementById('demo').innerHTML = `Your BMI is Overweght. \n Your BMI is ${result}`;
    }else if(result < 34.9){
        document.getElementById('demo').innerHTML = `Your BMI is Obese class I. \n Your BMI is ${result}`;
    }else if(result < 39.9){
        document.getElementById('demo').innerHTML = `Your BMI is Obese classII. \n Your BMI is ${result}`;
    }else if(result >= 40.0){
        document.getElementById('demo').innerHTML = `Your BMI is Obese classIII. \n Your BMI is ${result}`;
    }
}
