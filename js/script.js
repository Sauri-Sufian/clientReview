
const addReviewBtn=document.querySelector("#add-review-btn")
const backDrop = document.querySelector("#backdrop")
const modal=document.getElementsByClassName('modal')[0];
const initialCOntent = document.getElementById('content')
const userName=document.getElementById('user-name');
const userImg= document.getElementById('user-image');
const uniqueID=document.getElementById('info');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn')
const reviewScore=document.getElementById('score-review');
const  icons = document.querySelectorAll('.fa-star');
let userID=0;
let userData=
[
    {
    id:userID++,
    name:"Stanley Kubrick",
    imgUrl:`https://robohash.org/${userID}?set=set4`,
    score:"5",
    text:" So, here we are. Why is Stanley Kubrick the best movie director of all time? Well, we don't have 3 hours to explain everything so here's a brief argument for this decision. If we can agree on the qualities that great directors must have, Kubrick simply checks all of the boxes."

    },
    {
    id:userID++,
    name:"Alfred Hitchcock",
    imgUrl:`https://robohash.org/${userID}?set=set4`,
    score:"4",
    text:" There's a scene in Hitchcock, the biography starring Anthony Hopkins, where Alfred Hitchcock stands outside a packed theater as an audience watches Psycho for the first time. And when the infamous shower scene unfolds and the cacophony of screams erupts, Hitchcock emphatically waves his arms back and forth like an orchestral conductor."

    },
    {   
        id:userID++,
        name:"Akira Kurosawa",
        imgUrl:`https://robohash.org/${userID}?set=set4`,
        score:"3",
        text:" You don't have to understand Japanese culture or be a scholar of the country's Sengoku period to appreciate what Akira Kurosawa's work means. The point is Kurosawa took stories that are extremely specific and made them globally relevant. His stories took common themes from his own culture but also Shakespeare and found a message that resonated around the world."
    
    },
    {   
        id:userID++,
        name:"Steven Spielberg",
        imgUrl:`https://robohash.org/${userID}?set=set4`,
        score:"2",
        text:"Steven Spielberg has been directing for over 50 years and shows no signs of stopping. Looking at his career, it's not just the sheer number of movies he's directed (30+), it's the amount of greatness on that list"
    
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
const resetIcon=()=>{
    for (const iterator of icons) {
        iterator.classList.remove('pos');
    }
}

const showInitialContent=(user) =>{
    resetIcon();
    initialCOntent.innerText=user.text;
    userName.innerText=user.name;
    uniqueID.innerText=user.id
    userImg.innerHTML=
    `
    <img width="50px" src="${user.imgUrl}" alt="">
    ` 
  for (let item=0;item<user.score;item++) {
     icons[item].classList.add('pos')
  }
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
const clearData=(name,score,text)=>{
    name.value="";
    score.value="";
    text.value="";
}

const newUserAddHandler=()=>{
    const nameInput=document.getElementById('name-input');
    const scoreInput=document.getElementById('score-input');
    const textArea=document.getElementById('txt-area');

    let newUser={
        id:userID++,
        name:nameInput.value,
        imgUrl:`https://robohash.org/${userID}?set=set4`,
        score:scoreInput.value,
        text:textArea.value
    }

    
    userData.push(newUser);
    closeModalHandler();
    clearData(nameInput,scoreInput,textArea);

}


backDrop.addEventListener('click',closeModalHandler)
addReviewBtn.addEventListener('click',modalHandler);
prevBtn.addEventListener('click',showPrevDataHandler);
nextBtn.addEventListener('click',showNextDataHandler);
submitBtn.addEventListener('click',newUserAddHandler);




showInitialContent(userData[0]);