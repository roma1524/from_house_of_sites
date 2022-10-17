document.addEventListener('DOMContentLoaded', () => {


  // ---------------------- Show tabs ----------------------

  const tabsItem = document.querySelectorAll('[data-tabs]'),
    descriptionItem = document.querySelectorAll('[data-descr]'),
    parentNode = document.querySelector('.working_nav-list');

  /**
   * Adds an active class to the selected tab
   * @param event
   */
  function showTabContent(event) {
    tabsItem.forEach(item => {
      item.classList.remove('active');
    });

    descriptionItem.forEach(item => {
      item.classList.remove('active_tab');
    })

    tabsItem.forEach((item, i) => {
      if (item == event.target) {
        item.classList.add('active');
        descriptionItem[i].classList.add('active_tab');
      }
    })
  }

  parentNode.addEventListener('click', showTabContent);


  // ---------------------- Modal ----------------------

  const buttonsFromModal = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal');

  function openModalWindow(event) {
    event.preventDefault();

    modalWindow.classList.add('show');
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '17px';
  }

  function closeModalWindow() {
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  }

  buttonsFromModal.forEach(btn => {
    btn.addEventListener('click', openModalWindow)
  });

  modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
      closeModalWindow();
    }
  });

  // ---------------------- Search panel ----------------------

  const searchBtn = document.querySelector('.search-link');
  // searchPanel = document.querySelector('search_panel');

  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.search_panel').classList.toggle('show_panel');
  })

})