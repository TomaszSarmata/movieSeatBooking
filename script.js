const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = +movieSelect.value;

const updateTicketPrice = (numberOfSeat) => {
  let totalPrice = movieSelect.value * numberOfSeat;
  total.innerHTML = totalPrice;
  return totalPrice;
};

container.addEventListener("click", function (e) {
  Array.from(seats, (seat) => {
    if (e.target === seat) {
      e.target.classList.toggle("selected");
      let numberOfSeat = document.querySelectorAll(
        ".row .seat.selected"
      ).length;
      console.log(numberOfSeat);
      count.innerText = numberOfSeat;
      updateTicketPrice(numberOfSeat);
    }
  });
});
