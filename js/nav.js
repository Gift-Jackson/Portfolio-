window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll("ul li a")

  setTimeout(() => {
    transition_el.classList.remove("is-active")
  }, 500);


  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = anchor.href;


      transition_el.classList.add("is-active")

      setTimeout(() => {
        window.location.href = target;
      }, 500);

      // const loadText = document.querySelector('.load-text');
      // let id = anchor.getAttribute('id');

      // if(id == home){
      //   loadText.textContent = "Home"
      // }
      // else if(id == about){
      //   loadText.textContent = "About me"
      // }
      
    });
  })
}