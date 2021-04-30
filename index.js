
function faktorialis(n) {
  let megoldas = 1;
  if (n == 0 || n == 1) {
    return megoldas;
  }else{
    for(let i = n; i >= 1; i--) {
      megoldas = megoldas * i;
    }
    return megoldas;
  }  
}
 
  for(let i = 0; i <= 20; i++) {
    const eredmeny = faktorialis(i)
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    const tdFact = document.createElement('td');
    const tdRes = document.createElement('td');
    tdFact.innerHTML = i +"!";
    tdRes.innerHTML = eredmeny;
    tr.append(tdFact, tdRes);
    tbody.append(tr);
  }
 
   const eredmeny = faktorialis('WEBLAPDIZÁJN'.length);
   document.write('<p>', "WEBLAPDIZÁJN faktoriálisának eredménye: ",'<b>', eredmeny, '</b>', '</p>')

  