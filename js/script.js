
const addReviewBtn=document.querySelector("#add-review-btn")
const backDrop = document.querySelector("#backdrop")
const modal=document.getElementsByClassName('modal')[0];
const initialCOntent = document.getElementById('content')
const userName=document.getElementById('user-name');
const userImg= document.getElementById('user-image');
const uniqueID=document.getElementById('info');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let userID=0;
let userData=
[
    {
    id:userID++,
    name:"siam",
    imgUrl:`https://robohash.org/${userID}?set=set4`,
    score:"5",
    text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ratione et dolor. Esse aut quis quos eligendi perferendis voluptate quas sed quam quasi inventore magnam, magni possimus temporibus repellendus molestias.an"

    },
    {
    id:userID++,
    name:"sufian",
    imgUrl:`https://robohash.org/${userID}?set=set4`,
    score:"5",
    text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ratione et dolor. Esse aut quis quos eligendi perferendis voluptate quas sed quam quasi inventore magnam, magni possimus temporibus repellendus molestias."

    },
    {   
        id:userID++,
        name:"bla",
        imgUrl:`https://robohash.org/${userID}?set=set4`,
        score:"5",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ratione et dolor. Esse aut quis quos eligendi perferendis voluptate quas sed quam quasi inventore magnam, magni possimus temporibus repellendus molestias.i"
    
    },
    {   
        id:userID++,
        name:"jaha",
        imgUrl:`https://robohash.org/${userID}?set=set4`,
        score:"5",
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ratione et dolor. Esse aut quis quos eligendi perferendis voluptate quas sed quam quasi inventore magnam, magni possimus temporibus repellendus molestias."
    
    }
]

const toggleBackDrop=()=>{
    backDrop.classList.toggle('visible')
}
const closeModalHandler=()=>{
    modal.classList.remove('visible');
    toggleBackDrop();
}
const showModal=()=>{
    modal.classList.add('visible');
}
const modalHandler=()=>{
    toggleBackDrop();
    showModal();
}

const showInitialContent=(user) =>{
    initialCOntent.innerText=user.text;
    userName.innerText=user.name;
    uniqueID.innerText=user.id
    userImg.innerHTML=
    `
    <img width="50px" src="${user.imgUrl}" alt="">
    ` 
    
    
}

const showPrevDataHandler=()=>{
    const getId=parseInt(uniqueID.innerText);
    let index=parseInt(getId-1);
  
    if(index<0){
        index=userData.length-1;
    }
    
    showInitialContent(userData[index])
}
const showNextDataHandler=()=>{
    const getId=parseInt(uniqueID.innerText);
    let index=parseInt(getId+1);
  
    if(index>=userData.length){
        index=0;
    }
    
    showInitialContent(userData[index])

}



backDrop.addEventListener('click',closeModalHandler)
addReviewBtn.addEventListener('click',modalHandler);
prevBtn.addEventListener('click',showPrevDataHandler);
nextBtn.addEventListener('click',showNextDataHandler);
showInitialContent(userData[0]);