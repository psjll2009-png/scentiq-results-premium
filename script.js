const formulaData = "Cedarwood 30%, Vanilla 25%, Amber 45%";

function populateFormulaTable() {
  const table = document.getElementById("formula-table");
  const rows = formulaData.split(",").map(item => item.trim());

  rows.forEach(row => {
    const [oil, percent] = row.split(/ (?=\d+%)/);
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${oil}</td><td>${percent}</td>`;
    table.appendChild(tr);
  });
}

function saveBlend() {
  alert("Blend saved to your account (not implemented)");
}

function remixBlend() {
  alert("Remixing your blend... (not implemented)");
}

window.onload = populateFormulaTable;
