const form = document.querySelector(".form");
const response = document.querySelector(".response");
const btnResponse = document.querySelector(".btn-response");
const inputCardName = document.querySelector(".input-name-card");
const inputCardNumber = document.querySelector(".input-number-card");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");
const inputCode = document.querySelector(".input-code");

// oninput="this.value = this.value.replace(/[0-9]/g, '');"

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (verificacaoNumberCard() === false) {
    verificacaoNumberCard();
  } else if (verificacaoMonthAndYear() === false) {
    verificacaoMonthAndYear();
  } else if (verificacaoCode() === false) {
    verificacaoCode();
  } else {
    form.style.display = "none";
    response.style.display = "flex";
  }
});

// VALIDANDO NO MÍNIMO 19 DIGITOS (contando os espaços) NO INPUT NUMBER
function verificacaoNumberCard() {
  let tamanho = inputCardNumber.value;
  let message = document.querySelector(".erro-numberCard");

  if (tamanho.length < 19) {
    inputCardNumber.classList.add("erro");
    message.style.visibility = "visible";

    document.addEventListener("click", () => {
      inputCardNumber.classList.remove("erro");
      message.style.visibility = "hidden";
    });

    return false;
  }

  if (tamanho.length === 16) {
    return true;
  }
}

// VALIDANDO NO MÍNIMO 2 DIGITOS NOS INPUTS MONTH E YEAR
function verificacaoMonthAndYear() {
  let tamanhoMonth = inputMonth.value;
  let tamanhoYear = inputYear.value;
  let message = document.querySelector(".erro-monthCard-yearCard");

  if (tamanhoMonth.length < 2) {
    inputMonth.classList.add("erro");
    message.style.visibility = "visible";

    document.addEventListener("click", () => {
      inputMonth.classList.remove("erro");
      message.style.visibility = "hidden";
    });

    return false;
  } else if (tamanhoYear.length < 2) {
    inputYear.classList.add("erro");
    message.style.visibility = "visible";

    document.addEventListener("click", () => {
      inputYear.classList.remove("erro");
      message.style.visibility = "hidden";
    });

    return false;
  }

  if (tamanhoMonth.length === 2 && tamanhoYear.length === 2) {
    return true;
  }
}

// VALIDANDO NO MÍNIMO 3 DIGITOS NO INPUT CODE
function verificacaoCode() {
  let tamanhoCode = inputCode.value;
  let message = document.querySelector(".erro-codeCard");

  if (tamanhoCode.length < 3) {
    inputCode.classList.add("erro");
    message.style.visibility = "visible";

    document.addEventListener("click", () => {
      inputCode.classList.remove("erro");
      message.style.visibility = "hidden";
    });

    return false;
  }

  if (tamanhoCode.length === 3) {
    return true;
  }
}

// VALIDANDO SOMENTE LETRAS NO INPUT NOME
inputCardName.addEventListener("keypress", (event) => {
  const keyCode = event.keyCode ? event.keyCode : event.wich;

  if (keyCode > 32 && keyCode <= 64) {
    event.preventDefault();
  }

  if (keyCode >= 90 && keyCode <= 96) {
    event.preventDefault();
  }

  if (keyCode >= 123 && keyCode <= 180) {
    event.preventDefault();
  }
});

// VALIDANDO SOMENTE NÚMEROS NO INPUT NUMBER
inputCardNumber.addEventListener("keypress", (event) => {
  const keyCode = event.keyCode ? event.keyCode : event.wich;

  if (keyCode >= 32 && keyCode < 48) {
    event.preventDefault();
  }

  if (keyCode > 58 && keyCode <= 180) {
    event.preventDefault();
  }
});

btnResponse.addEventListener("click", () => {
  form.style.display = "flex";
  response.style.display = "none";

  inputCardName.value = "";
  inputCardNumber.value = "";
  inputMonth.value = "";
  inputYear.value = "";
  inputCode.value = "";

  nameCard.textContent = "Jane Appleseed";
  numberCard.textContent = "0000 0000 0000 0000";
  monthCard.textContent = "00/";
  yearCard.textContent = "00";
  numberCodeCardBack.textContent = "000";
});

// ADICIONANDO INFORMAÇÕES NAS IMAGENS DO CARTÃO

const numberCard = document.querySelector(".number-card");
const numberCodeCardBack = document.querySelector(".code-card-back");
const nameCard = document.querySelector(".name-card");
const monthCard = document.querySelector(".month-card");
const yearCard = document.querySelector(".year-card");

inputCardName.addEventListener("keyup", () => {
  let nameStr = inputCardName.value;

  nameCard.textContent = nameStr;
});

inputCardNumber.addEventListener("keyup", () => {
  let posicao = inputCardNumber.value.length;

  if (posicao === 4) {
    inputCardNumber.value += " ";
  } else if (posicao === 9) {
    inputCardNumber.value += " ";
  } else if (posicao === 14) {
    inputCardNumber.value += " ";
  }

  numberCard.textContent = inputCardNumber.value;
});

inputMonth.addEventListener("keyup", () => {
  let monthStr = inputMonth.value;

  let str = monthStr.substr(0, 2) + "/";

  monthCard.textContent = str;
});

inputYear.addEventListener("keyup", () => {
  let yearStr = inputYear.value;

  yearCard.textContent = yearStr;
});

inputCode.addEventListener("keyup", () => {
  let str = inputCode.value;

  numberCodeCardBack.textContent = str;
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    console.log("oi");
  }
});
