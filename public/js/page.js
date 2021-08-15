const title = document.querySelector('.note-title span');
const titleBtn = document.querySelector('#change-title'); 
const saveBtn = document.querySelector('#note-save');

titleBtn.addEventListener('click', () => {
  title.contentEditable = "true";
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

saveBtn.addEventListener('click', () => {
  document.querySelector('.note-title input').value = document.querySelector('.note-title span').textContent;
  console.log(document.querySelector('.note-title input').value);
})