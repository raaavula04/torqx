window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 2300);
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function openModal(title, desc) {
  modal.classList.add("show");
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

function closeModal() {
  modal.classList.remove("show");
}
