// Array learning


let myArray = ['greta','silas','sebastian','troels','jakob'];


myArray.forEach((elevNavn) => {
    

    // Dom Element
   let listElement = document.createElement('li');
    // Change InnerText
    listElement.innerText = elevNavn;
    // parent til eksisterende dom element
    let myDomListElement = document.getElementById('test');
    myDomListElement.appendChild(listElement);
});

