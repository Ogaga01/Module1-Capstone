const openMenu = document.getElementById('hamburger');
const closeMenu = document.querySelector('.close');
const popUp = document.getElementById('header-nav');
const menuList = document.querySelectorAll('.list');

openMenu.addEventListener('click', () => {
  popUp.classList.add('show');
});
closeMenu.addEventListener('click', () => {
  popUp.classList.remove('show');
});
menuList.forEach((item) => {
  item.addEventListener('click', () => {
    popUp.classList.remove('show');
  });
});

const summitSpeakers = document.getElementById('speakers');
const people = [
  {
    id: 1,
    image: './Images/President-Muhammadu-Buhari.png',
    name: 'President Muhammadu Buhari',
    title: 'President, Federal Republic of Nigeria',
    description: 'The president and commander in chief of the Federal Republic of Nigeria talks about the cripling, epileptic power situation in the country, and also provide suggestions as to how to stabilise the electricity situation.',
    left: true,
  },

  {
    id: 2,
    image: './Images/Yemi-Osinbajo.png',
    name: 'Yemi Osibajo',
    title: 'Vice President, Federal Republic of Nigeria',
    description: 'The vice president gives his take on the power and electricity generation within the country, suggest plans to help the country move forward in her fight for better electrical situation.',
  },

  {
    id: 3,
    image: './Images/Babatunde-Raji-Fashola-SAN-Governor-Lagos-State.png',
    name: 'Babatunde Raji Fashola, SAN',
    title: 'Minister of Works, Power and Housing',
    description: 'Being at the head of the the power sector in Nigeria, the minister would give us a breifing of the investigation carried out by him and his team on the power situation in the country.',
    left: true,
  },

  {
    id: 4,
    image: './Images/Babajide_Sanwo-Olu.png',
    name: 'Babajide Sanwo-Olu',
    title: 'Governor, Lagos State',
    description: 'The governor of one of the most populous states in the country would now tell us about how his citizens cope with the poor electricity situation in the state.',
  },

  {
    id: 5,
    image: './Images/lawan.png',
    name: 'Ahmad Lawan',
    title: 'Senate President, Federal Republic Of Nigeria',
    description: 'The senate president would update us on the decisions made to promote better electricity by the senate house.',
    left: true,
  },

  {
    id: 6,
    image: './Images/Governor-Ifeanyi-Okowa.png',
    name: 'Ifeanyi Okowa',
    title: 'Governor, Delta State',
    description: 'Gorvenor Okowa would give us details of the use of the oil sector in the Nigerian Power Sector.',
  },
];

const speakerList = people.map((speakers) => `
<div class="${speakers.left ? 'left-speakers' : 'right-speakers'}">
<div><img class="speaker-image" src="${speakers.image}" alt="speaker image"></div>
<div>
    <h6 class="seventh-header">${speakers.name}</h6>
    <p class="sixth-para">${speakers.title}</p>
    <p class="seventh-para">${speakers.description}</p>
</div>
</div>
`).join('');

window.addEventListener('load', () => {
  summitSpeakers.innerHTML = speakerList;
});
