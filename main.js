function Topla(A , boyut , x) { 
    for (i = 0; i < (boyut); i++) { // hedef ve toplam değeri karşılaştıran iki adet iç içe for döngüsüne ihtiyacımız var.
        for (j = (i + 1); j < boyut; j++) {
            if (A[i] + A[j] == x) {
                

                return true;
            }
        }
    }

    return false;
}
  
    var A = [2,-4,11,15];
    var x = -2;
    var boyut = A.length;

    if (Topla(A, boyut, x)) { // fonksiyonu çağıralım
       document.write("hedef:" + x + "çıktı:" +` [${i},${j}]` );  //ekrana hedef değerini ve hangi indexlerin toplamı verdiğini yazdıralım
     
    } else {
        document.write("<br/>Bulunamadı " + x);
    }