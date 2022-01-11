const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

for (let i = 0; i < team.length; i++) {
  getCardCode(team[i]);
}

const addBtn = document.getElementById('addMemberButton');

addBtn.addEventListener("click",addCard);

function addCard(){
  const newCard = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    image: document.getElementById('image').value
  }
  team.push(newCard);
  getCardCode(newCard);
  
}

function getCardCode(cardObj) {
  let imageLink = "img/";
  if(cardObj.image.slice(0,4) == "http"){
    imageLink = "";
  }
  document.querySelector('.team-container').innerHTML = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${imageLink}${cardObj.image}"
          alt="${cardObj.name}"
        />
      </div>
      <div class="card-text">
        <h3>${cardObj.name}</h3>
        <p>${cardObj.role}</p>
      </div>
    </div>`;
}

