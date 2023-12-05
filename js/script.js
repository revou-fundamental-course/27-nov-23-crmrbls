
document.addEventListener("DOMContentLoaded", function() {
    const luasForm = document.getElementById("luasForm");
    const kelilingForm = document.getElementById("kelilingForm");

    luasForm.addEventListener("keyup", function(event) {
        event.preventDefault();
        const alas = parseFloat(document.getElementById("luasForm_alas").value);
        const tinggi = parseFloat(document.getElementById("luasForm_tinggi").value);

        const alasValue = isNaN(alas) ? 'Alas' : alas;
        const tinggiValue = isNaN(tinggi) ? 'Tinggi' : tinggi;

        const hasilLuas = 0.5 * alasValue * tinggiValue;
        const luasResult = document.getElementById("luasResult");
        luasResult.textContent = " 1/2 x " + alasValue + " x " + tinggiValue + " = "  + hasilLuas + " cm";
    });

    kelilingForm.addEventListener("keyup", function(event) {
        event.preventDefault();
        const nilaiA = parseFloat(document.getElementById("keliling_sisiA").value);
        const nilaiB = parseFloat(document.getElementById("keliling_sisiB").value);
        const nilaiC = parseFloat(document.getElementById("keliling_sisiC").value);

        const nilaiAValue = isNaN(nilaiA) ? 'Nilai A' : nilaiA;
        const nilaiBValue = isNaN(nilaiB) ? 'Nilai B' : nilaiB;
        const nilaiCValue = isNaN(nilaiC) ? 'Nilai C' : nilaiC;

        const hasilKeliling = nilaiAValue + nilaiBValue + nilaiCValue;
        const kelilingResult = document.getElementById("kelilingResult");
        kelilingResult.textContent = nilaiAValue + " + " + nilaiBValue + " + " + nilaiCValue + " = "  + hasilKeliling + " cm";
    });
});



