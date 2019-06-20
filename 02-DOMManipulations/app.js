function app() {

    let firstName = document.createElement('li');
    let lastName = document.createElement('li');
    let age = document.createElement('li');
    let town = document.createElement('li');
    
    firstName.textContent = 'Kosta';
    lastName.textContent = 'Nikolov';
    age.textContent = '24';
    town.textContent = 'Rousse';
    
    let myList = document.createElement('ul');
    myList.appendChild(firstName);
    myList.appendChild(lastName);
    myList.appendChild(age);
    myList.appendChild(town);

    document.body.appendChild(myList);

    let result = document.createElement('p');
    result.style.backgroundColor = 'black';
    result.style.color = 'yellow';
    result.style.display = 'inline-block';
    result.textContent = `You are ${firstName.textContent} ${lastName.textContent}, a ${age.textContent}-years-old person from ${town.textContent}.`;
    document.body.appendChild(result);

    // let bodyElement = document.body;

    // let pElement = document.createElement('p');
    // pElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsa tempore amet earum soluta nihil sapiente laborum ab maiores facilis molestias ut minus natus illum! Expedita voluptatum quibusdam unde saepe!';
    // pElement.style.fontSize = '2.2rem';
    // pElement.style.backgroundColor = 'black';
    // pElement.style.color = 'yellow';

    // let newP = pElement.cloneNode(true);
    // newP.style.backgroundColor = '#42f4aa';
    // newP.style.color = 'black';
    
    // bodyElement.style.backgroundColor = 'lightblue';
    // bodyElement.appendChild(pElement);
    // bodyElement.appendChild(newP);

    // let thirdPElement = newP.cloneNode(true);

    // while (thirdPElement.attributes.length > 0) {
    //     let index = thirdPElement.attributes.length - 1;
    //     let attrubuteName = thirdPElement.attributes[index].name;

    //     thirdPElement.removeAttribute(attrubuteName);
    // }

    // bodyElement.appendChild(thirdPElement);

    // console.log(pElement === newP);
}
