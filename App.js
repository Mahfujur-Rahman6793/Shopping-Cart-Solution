function UpdatecaseNumber(product, priceValue ,isIncreasing){
    const InputValue = document.getElementById(product + '-number-field');
    let values = InputValue.value;
    if(isIncreasing){
        values = parseInt(values)+1;
    }
    else if(values>0){
        values = parseInt(values) -1;
    }
    // console.log(values);
    InputValue.value = values;
    const price = document.getElementById(product + '-total');
    const price_values = price.innerText;
    // price.innerText = price_values * values;
    price.innerText = priceValue * values;
    calculate_price();
}
function getInputValue(product){
    const inputNumber = document.getElementById(product +'-number-field');
    const input_value = parseInt(inputNumber.value);
    // console.log(input_value);
    return input_value;


}
function calculate_price(){

    const Totalprice_phone = getInputValue('phone') * 1219;
    // console.log(Totalprice_phone);
    const Totalprice_case = getInputValue('case') * 59;
    // console.log(Totalprice_case);
    const subTotal_price = parseInt(Totalprice_phone + Totalprice_case);
    const tex = subTotal_price/10;
    const total = subTotal_price + tex;
    // console.log(subTotal_price);
    document.getElementById('sub-total').innerText = subTotal_price;
    document.getElementById('tax-amount').innerText = tex;
    document.getElementById('final-total').innerText = total;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    // console.log('plus, i am clicked');
    UpdatecaseNumber('phone', 1219 ,true);
    

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    UpdatecaseNumber('phone', 1219 ,false);
    // const Inputvalue_Minus = document.getElementById('phone-number-field');
    // const valueOriginal = Inputvalue_Minus.value;
    // Inputvalue_Minus.value = parseInt(valueOriginal) -1;
})
document.getElementById('btn-case-plus').addEventListener('click',function(){
    UpdatecaseNumber('case', 59 ,true);
    // const number_case = document.getElementById('case-number-field');
    // const number_case_value = number_case.value;
    // number_case.value = parseInt(number_case_value) + 1;
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    UpdatecaseNumber('case', 59 ,false);
    // const Inputvalue_Minus = document.getElementById('case-number-field');
    // const valueOriginal = Inputvalue_Minus.value;
    // Inputvalue_Minus.value = parseInt(valueOriginal) -1;
})