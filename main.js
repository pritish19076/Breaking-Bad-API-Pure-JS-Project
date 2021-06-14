const break_container = document.getElementById('break_container');
const BreakingBads_number = 55;

const fetchBreakingBads = async () => {
	for (let i = 0; i <= BreakingBads_number/5; i++) {
    let mylist=[];
    for (let j = i*5+1; j <= (i+1)*5; j++) {
      const myElement=await getBreakingBad(j);
      mylist.push(myElement);
    }
    mylist.forEach(myEle => break_container.appendChild(myEle) )
   
	}
};

const getBreakingBad = async id => {
  const url =`https://www.breakingbadapi.com/api/characters/${id}`;
  const res = await fetch(url);
  const BreakingBad = await res.json();
  return createBreakingBadCard(BreakingBad[0]);
 
}

const createBreakingBadCard = (BreakingBad) => {
  const BreakingBadEl = document.createElement('div');
  BreakingBadEl.classList.add('BreakingBad');
  const { name, img, occupation } = BreakingBad;
  
  const breakInnerHTML = `
 
  <div class="img-container">
    <img src="${img}" alt="${name}" />
  </div>
  <div class="info">
    <h3 class="name">${name}</h3>
    <small class="type">Occupation: <span>${occupation[0]}</span></small>
  </div>

  `;
  BreakingBadEl.innerHTML = breakInnerHTML;
  return BreakingBadEl;
	
 
}

fetchBreakingBads();