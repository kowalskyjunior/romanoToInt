var romantoInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    s = s.toUpperCase();
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (!romanMap[s[i]]) {
            return 'Erro: caractere inválido';
        }
        if (romanMap[s[i]] < romanMap[s[i + 1]]) {
            num -= romanMap[s[i]];
        } else {
            num += romanMap[s[i]];
        }
    }
    return num;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const romanInput = document.getElementById('roman').value.trim();
    if (romanInput === '') {
        document.getElementById('result').textContent = 'Por favor, insira um número romano';
        return;
    }
    const result = romantoInt(romanInput);
    document.getElementById('result').textContent = `O número inteiro é: ${result}`;
});