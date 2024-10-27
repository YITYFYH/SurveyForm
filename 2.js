function jiafayunsuan()
{
    
        let num1 = parseFloat(document.getElementById('number1').value);
        let num2 = parseFloat(document.getElementById('number2').value);
        if (isNaN(num1) || isNaN(num2)) {
            console.error("请输入有效的数字");
            alert ("请输入有效的数字")
    }
    else
        {
            let num3 = num1 + num2;
            alert(num3);
}
    

}

