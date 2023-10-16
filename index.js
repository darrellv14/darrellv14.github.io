var elem = document.getElementById("darrell");
window.addEventListener("scroll", function () {
  var value = window.scrollY * 0.25;
  elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`;
});

document.addEventListener("DOMContentLoaded", function () {
  let multipleCardCarousel = document.querySelector("#carouselExampleControls");

  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });

    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });

    document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
      }
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});


var whatsappLink = "";

function buatLink() {
  var namaDepan = document.getElementById("namadepan").value;
  var namaBelakang = document.getElementById("namabelakang").value;
  var nrp = document.getElementById("nrp").value;
  var nomor = document.getElementById("nomor").value;
  var isiPesan = document.getElementById("pesan").value;

  var link = "https://api.whatsapp.com/send?phone=6282121012323";
  var perkenalan = "Saya%20" + namaDepan + "%20" + namaBelakang + "%20dengan%20nomor%20" + nomor + "%20dan%20NRP%20" + nrp + ",%20";

  isiPesan = isiPesan.split(" ");
  isiPesan = isiPesan.join("%20");
  isiPesan = isiPesan.split("\n")
  isiPesan = isiPesan.join("%0A")
  link += ("&text=" + perkenalan + isiPesan);

  document.getElementById("validasimessage").innerHTML = "<a class='form-control form-control-md border-0 inputform text-success fw-bold mb-3' href='" + link + "' target='_blank'>" + "Click di sini" + "</a>";
}

function validasi() {
  let nomorWhatsApp = document.getElementById("nomor").value;
  let validasinomor = document.getElementById("validasinomor");

  if (nomorWhatsApp === "") {
    validasinomor.innerText = "*Nomor Whatsapp tidak boleh kosong";
    validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else if (!nomorWhatsApp.startsWith("+628")) {
    validasinomor.innerText = "*Nomor Whatsapp harus dimulai dengan +628";
    validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else if (nomorWhatsApp.length < 12) {
    validasinomor.innerText = "*Nomor Whatsapp kurang dari 12 digit";
    validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else if (nomorWhatsApp.length > 15) {
    validasinomor.innerText = "*Nomor Whatsapp lebih dari 15 digit";
    validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else {
    validasinomor.innerText = "";
    validasinomor.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  }

  let firstname = document.getElementById("namadepan").value;
  let lastname = document.getElementById("namabelakang").value;
  let validasidepan = document.getElementById("validasidepan");
  let validasibelakang = document.getElementById("validasibelakang");

  if (firstname === "" && lastname === "") {
    validasidepan.innerText = "*Nama depan tidak boleh kosong";
    validasidepan.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    validasibelakang.innerText = "*Nama belakang tidak boleh kosong";
    validasibelakang.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else if (firstname === "") {
    validasidepan.innerText = "*Nama depan tidak boleh kosong";
    validasidepan.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    validasibelakang.innerText = "";
    validasibelakang.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else if (lastname === "") {
    validasibelakang.innerText = "*Nama belakang tidak boleh kosong";
    validasibelakang.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    validasidepan.innerText = "";
    validasidepan.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else {
    validasidepan.innerText = "";
    validasidepan.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    validasibelakang.innerText = "";
    validasibelakang.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  }

  var nrp = document.getElementById("nrp");
  let validasinrp = document.getElementById("validasinrp");
  
  if (nrp.value == "") {
  validasinrp.innerText = "*NRP tidak boleh kosong";
  validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
  } else {
    var parsedNrp = parseInt(nrp.value);
  
    if (isNaN(parsedNrp) || nrp.value !== parsedNrp.toString()) {
      validasinrp.innerText = "*NRP harus berupa angka";
      validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (nrp.value.length != 10) {
      validasinrp.innerText = "*NRP harus berjumlah 10 digit.";
      validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else {
      validasinrp.innerText = "";
      validasinrp.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    }
  }

  if (
    validasinomor.innerText === "" &&
    validasidepan.innerText === "" &&
    validasibelakang.innerText === "" &&
    validasinrp.innerText === "") 
    {
      buatLink();
  }
}