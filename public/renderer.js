window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#title");
  const changeTitle = document.querySelector('#change-title');
  const content = document.querySelector("#content");
  const saveBtn = document.querySelector("#save-btn");
  const newPage = document.querySelector('#new-page');

  saveBtn.addEventListener("click", () => {
    window.page.put({
      id: window.pageActiveId.get(),
      title: title.textContent,
      content: content.value,
    })
  });

  newPage.addEventListener('click', () => {
    window.page.post();
    reload();
  })

  changeTitle.addEventListener('click', () => {
    title.contentEditable = 'true'
    title.focus();

    title.onkeydown = (e) => {
      if(e.key === 'Enter') {
        title.contentEditable = "false";
      }
    }

    title.onblur = () => {
      title.contentEditable = "false";
    }
  })

  reload();
});

function reload() {
  console.log("reload");
  const title = document.querySelector("#title");
  const content = document.querySelector("#content");
  const pageNav = document.querySelector("#page-nav");

  const data = window.getData();

  const pageActiveId = window.pageActiveId.get();
  const pageActive = window.page.get(pageActiveId);

  // active : border-l-4 border-gray-500
  pageNav.innerHTML = "";
  data.forEach((page) => {
    pageNav.innerHTML += `
      <div class="relative flex items-center hover:bg-gray-200 cursor-pointer page" >
          <span class="text-xl pl-4 ">${page.title}</span>
          <div class="absolute top-0 left-0 w-full h-full ${
            pageActiveId === page.id ? "border-l-4 border-gray-500" : ""
          }" id='${page.id}'></div>
      </div>
    `;
  });

  title.textContent = pageActive.title;
  content.value = pageActive.content;

  loadEvent();
}

function loadEvent() {
  const pages = document.querySelectorAll(".page");

  let idCur = window.pageActiveId.get();
  pages.forEach((page) => {
    page.addEventListener("click", (e) => {
      idCur = e.target.id;
      window.pageActiveId.put(idCur);
      reload();
    });
  });
}