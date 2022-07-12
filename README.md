# pet-salone
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,
 initial-scale=1.0">

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
 <link rel="stylesheet" href="styles/mystyle.css">

    <title>The fashion pet</title>
</head>
<body>
    <header>
        <nav class="nav justify-content-end">
            <a class="nav-link active" aria-current="page" href="index.html">home</a>
            <a class="nav-link" href="about.html">About</a>
            <a class="nav-link" href="register.html">Register</a>
            <a class="nav-link disabled">Admin</a>


        </nav>
        <h1 class="display-1">The fashion pet</h1>

    </header>

    <main class="container">
        <div class="title">
        <h2 >Register a pet</h2>
        <p id="number-pets"></p>
       </div>
       <div>
        <input type="text" class="form-control" placeholder="enter pets name" id="txtPetName">
        <input type="number" class="form-control" placeholder="enter pets age" id="numPetAge">
        <input type="text"class="form-control" placeholder="enter pets gender" id="txtPetGender">
        <input type="text"class="form-control" placeholder="enter pet's bread"
        id="txtPetBread">
        <select class="form-select" id="txtService">
            <option value="Nail cuts"> Nail cuts</option>
            <option value="grooming">grooming</option>
            <option value="vaccines">vaccines</option>
            <option value="teeth cleaning">teeth cleaning</option>
        </select>
        <input class="form-control" type="text" placeholder="enter pets owner" id="txtOwnerName">
        <input class="form-control" type="text" placeholder="enter pet's phone" id="txtPhone">
        
        <textarea name="comment" id="txtComment" cols="60" rows="3" placeholder="Type your comment"></textarea>
        
       <div class="btn-container">
       <button class="btn btn-primary" id="btnSave" onclick= register();>register pets</button>
       </div>
        
       </div>

 <!-- <div id="pet-cards" class="pets">

 </div> -->

 <table class="table">
<!--insert the pet info (tbody)-->
     
        
           <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>bread</th>
                <th>service</th>
                <th>owner</th>
                <th>phone</th>
                <th>comment</th>
                
            </tr>
           </thead>
           <tbody id="pet-table" class="pet-table">
            

           </tbody> 
        </table> 
       </div>
       <div class="search">
        <input type="search" placeholder="enter pets name" id="txtSearch">
        <button class="btn btn-primary" id="btnSearch" onclick="search();">search</button>
       </div>
 
     

 
    </main>

    <footer>
        <p>all the copyrights reserved bret patterson &copy; 2022</p>
        <p id="info"></p>

  <script src="scrips/register.js"></script>
  <script src="scrips/display.js"></script>

  
    </footer>
   
</body>
</html>
