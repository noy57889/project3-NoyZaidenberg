// 1. Fetch meat cuts from cuts.json and render cards dynamically
const cutsContainer = document.getElementById("cutsContainer");

function loadCuts() {
  fetch("cuts.json")
    .then(res => res.json())
    .then(cuts => {
      let htmlAcumulado = "";

      cuts.forEach(cut => {
        htmlAcumulado += `<div class="col-12 col-md-6 col-lg-4">`;
        htmlAcumulado += `  <div class="cut-card border border-2 border-secondary rounded p-4 h-100 d-flex flex-column">`;
        htmlAcumulado += `    <p class="cut-origin">${cut.category}</p>`;
        htmlAcumulado += `    <h3 class="cut-title">${cut.name}</h3>`;
        htmlAcumulado += `    <p class="cut-doneness">"${cut.englishName}"</p>`;
        htmlAcumulado += `    <p class="mb-2">${cut.description}</p>`;
        htmlAcumulado += `    <p class="mb-0 mt-auto"><i class="bi bi-fire"></i> Best served: ${cut.doneness}</p>`;
        htmlAcumulado += `  </div>`;
        htmlAcumulado += `</div>`;
      });

      cutsContainer.innerHTML = htmlAcumulado;
    });
}

loadCuts();

// 2. Bootstrap form validation inside the modal
const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});
