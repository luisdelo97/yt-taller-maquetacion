((d) => {
  const menuBtn = d.querySelector(".menu-btn");
  const menu = d.querySelector(".menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.firstElementChild.classList.toggle("none");
    menuBtn.lastElementChild.classList.toggle("none");
    menu.classList.toggle("is-active");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      menuBtn.firstElementChild.classList.remove("none");
      menuBtn.lastElementChild.classList.add("none");
      menu.classList.remove("is-active");
    }
  });
})(document);

((d) => {
  const form = d.querySelector(".contact-form");
  const loader = d.querySelector(".contact-form-loader");
  const response = d.querySelector(".contact-form-response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/ldelorenzi@fiuna.edu.py", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        location.hash = "#thanks";
        form.reset();
      })
      .catch((err) => {
        response.querySelector(
          "h3"
        ).textContent = `Error ${err.status}: algo salio mal`;
      })
      .finally(() => {
        loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
