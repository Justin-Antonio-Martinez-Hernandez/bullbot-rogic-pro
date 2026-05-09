const workspace = [];

function addBlock(type) {
  workspace.push(createBlock(type));
  renderWorkspace();
}

function renderWorkspace() {

  const el = document.getElementById('workspace');

  el.innerHTML = '';

  workspace.forEach(block => {

    const div = document.createElement('div');

    div.className = 'block';

    div.innerHTML = `<strong>${block.type}</strong>`;

    el.appendChild(div);
  });
}
