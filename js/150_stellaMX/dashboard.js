window.addEventListener('load', () => {
  // Funcionalidad de lasanimaciones AOS
  AOS.init({
    easing: 'ease',
    once: true,
  });

  clickNewFriend()
  discountCard()
  closePopup()
  openLoader()
})

function clickNewFriend() {
  const newFriendBtn = document.querySelector('.SA-newFriend')

  newFriendBtn?.addEventListener('click', () => {
    newFriendBtn.classList.add('SA-newFriend--new')
  })
}

function discountCard() {
  const friendList = document.querySelectorAll('.SA_dashboard-friendList--list .card')
  const discountBtn = document.querySelector('.SA_dashboard-btnBox .btnSA-red-block')
  const discountPopup = document.querySelector('.SA-popup')

  friendList?.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('card--discount')) {
        discountPopup?.classList.remove('close')
      }
    })
  })

  discountBtn?.addEventListener('click', () => {
    discountPopup?.classList.remove('close')
  })
}

function closePopup() {
  const popup = document.querySelector('.SA-popup')
  const closedBtn = popup?.querySelector('.SA-popup-closeIcon')
  const otherBtn = popup?.querySelector('.btnSA-red-block-border')

  closedBtn?.addEventListener('click', () => popup.classList.add('close'))
  otherBtn?.addEventListener('click', () => popup.classList.add('close'))
}

function openLoader() {
  const loader = document.querySelector('.SA-loader')
  const discountPopup = document.querySelector('.SA-popup')
  const couponBtn = document.querySelector('.SA-popup .btnSA-red-block')

  couponBtn.addEventListener('click', ()=> {
    const friendList = document.querySelector('.SA_dashboard-friendList--list')
    const discountBtn = document.querySelector('.SA_dashboard-btnBox .btnSA-red-block')
    friendList?.classList.add('noClick')
    discountBtn?.classList.add('noClick')
    discountPopup?.classList.add('close')
    loader?.classList.remove('close')

    setTimeout(() => loader?.classList.add('close') ,'3000')
  })
}