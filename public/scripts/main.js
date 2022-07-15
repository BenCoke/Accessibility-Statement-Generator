function store(id) {
  valueToStore = document.getElementById(id).value;
  localStorage.setItem(id, valueToStore);
}

//function refill()
