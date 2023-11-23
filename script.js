const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

const updateSelectedCount = () => {
  let numberOfSeat = document.querySelectorAll(".row .seat.selected").length;
  count.innerText = numberOfSeat;
  let totalPrice = ticketPrice * numberOfSeat;
  total.innerHTML = totalPrice;
};

//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//seat click event
container.addEventListener("click", function (e) {
  console.log(ticketPrice);
  Array.from(seats, (seat) => {
    if (e.target === seat) {
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
  });
});
