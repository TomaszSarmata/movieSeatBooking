const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

const updateSelectedCount = () => {
  let numberOfSeat = document.querySelectorAll(".row .seat.selected").length;

  //copy selected seats into an array (for the local storage)
  //map through an array
  //return a new array indexes
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map(
    (seat) => [...seats].indexOf(seat) //so here we are mapping out all indexes of our seats that are not occupied and are returning the index of our selected seat/s that we are going to pass to our local storage
  );

  //setting up local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

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
  Array.from(seats, (seat) => {
    if (e.target === seat) {
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
  });
});
