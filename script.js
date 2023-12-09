document.addEventListener('DOMContentLoaded', function () {
  /* select all .list */
  const lists = document.querySelectorAll(".list");

  function activeLink() {
    lists.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }

  /* add event click to list */
  /* connect active and indication dynamically */
  lists.forEach((item, index) => {
    item.addEventListener("click", function () {
      document.querySelector(".indicator").style.transform =
        "translateX(calc(70px * " + index + "))";
      activeLink.call(this);
    });
  });
});



