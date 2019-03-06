// GET FORM ELEMENT
var subscribeForm =  document.getElementById('subscribeForm');
subscribeForm.setAttribute('action', '//formspree.io/' + 'intanlia1920' + '@' + 'gmail' + '.' + 'com');

// GET MODAL ELEMENT
var myModal =  document.getElementById('myModal');
var closeButton = document.getElementsByClassName('closeButton');

// MODAL FUNCTIONS
function closeModal() {
    myModal.style.display = 'none';
}
function clickOutside(event) {
    if(event.target == myModal) {
        myModal.style.display = 'none';
    }
}

// EVENTS LISTENER
closeButton[0].addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);