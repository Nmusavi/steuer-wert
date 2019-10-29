
function checkbn(){
    if(document.getElementById('brutto').checked){
        document.getElementById('salary-netto').style.display = 'block';
        document.getElementById('salary-brutto').style.display ='none';
        document.getElementById('brutto-result').style.display = 'block';
        document.getElementById('netto-result').style.display ='none';
    }else if(document.getElementById('netto').checked){
        document.getElementById('salary-netto').style.display = 'none';
        document.getElementById('salary-brutto').style.display ='block';
        document.getElementById('brutto-result').style.display = 'none';
        document.getElementById('netto-result').style.display ='block';
    }
}
checkbn();
function steuer(){
    var input = parseFloat(document.getElementById('salary').value);
    if(document.getElementById('brutto').checked){
        if(document.getElementById('r19').checked){
            document.getElementById('tax_complete').innerHTML = (input + (input * 0.19)).toFixed(2) + ' €';
            let differ = input + (input * 0.19);
            document.getElementById('tax').innerHTML = (differ - input).toFixed(2)+ ' €';
        }else if(document.getElementById('r7').checked){
            document.getElementById('tax_complete').innerHTML = (input + (input * 0.07)).toFixed(2)+ ' €';
            let differ = input + (input * 0.07);
            document.getElementById('tax').innerHTML = (differ - input).toFixed(2) + ' €';
        }
    }else if(document.getElementById('netto').checked){
        if(document.getElementById('r19').checked){
            document.getElementById('tax_complete').innerHTML = (input / (1 + 0.19)).toFixed(2)+ ' €';
            let differ = (input / (1 + 0.19));
            document.getElementById('tax').innerHTML = (input - differ).toFixed(2) + ' €';
        }else if(document.getElementById('r7').checked){
            document.getElementById('tax_complete').innerHTML = (input / (1 + 0.07)).toFixed(2)+ ' €';
            let differ = (input / (1 + 0.07));
            document.getElementById('tax').innerHTML = (input - differ).toFixed(2) + ' €';
        }

    }
   
    
}