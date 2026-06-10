let lista = ["Matrix", "Inception", "Interstellar"];

function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erroLogin = document.getElementById("erroLogin");

  if (!usuario || !senha) {
    erroLogin.textContent = "Preencha todos os campos.";
    return;
  }

  if (usuario === "aluno" && senha === "fiap2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
    renderizarLista();
  } else {
    erroLogin.textContent = "Usuário ou senha incorretos.";
  }
}

function renderizarLista() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  lista.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editarItem(index);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => removerItem(index);

    li.appendChild(btnEditar);
    li.appendChild(btnRemover);
    ul.appendChild(li);
  });
}

function adicionarFim() {
  const novoItem = document.getElementById("novoItem").value;
  const erroItem = document.getElementById("erroItem");
  if (!novoItem) {
    erroItem.textContent = "O campo não pode estar vazio.";
    return;
  }
  lista.push(novoItem);
  document.getElementById("novoItem").value = "";
  erroItem.textContent = "";
  renderizarLista();
}

function adicionarInicio() {
  const novoItem = document.getElementById("novoItem").value;
  const erroItem = document.getElementById("erroItem");
  if (!novoItem) {
    erroItem.textContent = "O campo não pode estar vazio.";
    return;
  }
  lista.unshift(novoItem);
  document.getElementById("novoItem").value = "";
  erroItem.textContent = "";
  renderizarLista();
}

function editarItem(index) {
  const novoValor = prompt("Editar item:", lista[index]);
  if (novoValor && novoValor.trim() !== "") {
    lista[index] = novoValor;
    renderizarLista();
  }
}

function removerItem(index) {
  lista.splice(index, 1);
  renderizarLista();
}
