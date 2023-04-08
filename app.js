// kiemtra o nhap 
const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea');
const submitButton = form.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (validator.isEmpty(name)) {
    alert('Xin hãy nhập tên của bạn.');
    return;
  }

  if (!validator.isEmail(email)) {
    alert('Vui lòng nhập một địa chỉ email hợp lệ.');
    return;
  }

  if (validator.isEmpty(message)) {
    alert('Vui lòng nhập tin nhắn của bạn.');
    return;
  }

  // Submit the form if all inputs are valid
  form.submit();
});

/* cars brand about */
const carLinks = document.querySelectorAll('.cars li a');

carLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const carName = e.target.textContent;
    alert(`You clicked on ${carName}`);
  });
});
// phan nay la cua brand 
const btns = document.querySelectorAll('.brand-menu button');
const items = document.querySelectorAll('.brand-item');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    items.forEach((item) => {
      if (item.classList.contains(filter) || filter === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    btns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
  });
});
//  about
// Add active class to the first tab and show the first tab content
document.querySelector(".tablinks").classList.add("active");
document.getElementById("defaultOpen").style.display = "block";

// When the user clicks on a tab, show the corresponding content
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
