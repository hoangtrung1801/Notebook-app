window.addEventListener("load", () => {
  // reload();
});


function reload(id) {
  console.log('reload');
  const title = document.querySelector('#title');
  const content = document.querySelector('#content'); 
  const pageNav = document.querySelector('#page-nav');

  let pageActiveId;
  if(id !== undefined) pageActiveId = id; 
  else pageActiveId = '0';
  const pageActive = data.find(page => page.id === pageActiveId);
  
  // active : border-l-4 border-gray-500
  const data = window.getData();
  pageNav.innerHTML = '';
  data.forEach(page => {
    pageNav.innerHTML += `
      <div class="relative flex items-center hover:bg-gray-200 cursor-pointer page" >
          <span class="text-xl pl-4 ">${page.title}</span>
          <div class="absolute top-0 left-0 w-full h-full ${pageActiveId === page.id ? 'border-l-4 border-gray-500' : ''}" id='${page.id}'></div>
      </div>
    `
  });

  title.textContent = pageActive.title;
  content.value = pageActive.content; 

  loadEvent();
}

function loadEvent() {
  const saveBtn = document.querySelector("#save-btn");
  const pages = document.querySelectorAll(".page");
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');

  let idCur;

  saveBtn.addEventListener("click", () => {});

  pages.forEach(page => {
    page.addEventListener('click', (e) => {
      idCur = e.target.id;
      reload(idCur);
      
      // const pageData = window.page.get(idCur);
      // title.textContent = pageData.title;
      // content.value = pageData.content;
    })
  })
}