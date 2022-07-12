function displayCardsPets(){
    //travel the array(for)
    let card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
        <div id="${pet.id} class="pet">
           <h4>name:${pet.name}</h4>
           <p>Age: ${pet.age}</p>
           <p>gender:${pet.gender}</p>
           <p>bread:${pet.bread}</p>
           <p>service:${pet.service}</p>
           <p>owner:${pet.owner}</p>
           <p>phone:${pet.phone}</p>
           <p>comment:${pet.Comment}</p>
          <p> <button class="btn btn-danger" onclick="deletePets();">Delete</button></p>
        </div>
        `;
       
    }

    //create the cards (html)

    //inject the card into the HTML (register.html)
    document.getElementById('pet-cards').innerHTML=card;
}
function displayPetsTable(){
    let tr="";
    //travel the array (for)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        tr+=`
        <tr id="${pet.id}" class="pet">
        <td>${pet.name}</td>
        <td> ${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.bread}</td>
        <td>${pet.service}</td>
        <td>${pet.owner}</td>
        <td>${pet.phone}</td>
        <td>${pet.comment}</td>
       <td> <button class="btn btn-danger" onclick="deletePets(${pet.id});">Delete</button></td>
        </tr> 
        `;
        
            
        
    //tr+=(tr,th,td)
    
    //inject the

    }
    document.getElementById("pet-table").innerHTML=tr; 

        }
