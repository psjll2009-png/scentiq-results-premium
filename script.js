document.addEventListener("DOMContentLoaded", function () {
  const resultsContainer = document.getElementById("results");

  const scentData = {
    email: "user@email.com",
    prompt: 'Warm cozy winter scent with vanilla and wood',
    blendName: "Cozy Cedar Vanilla",
    topNotes: ["Cardamom", "Bergamot"],
    middleNotes: ["Vanilla", "Tonka Bean"],
    baseNotes: ["Cedarwood", "Amber"],
    description:
      "A warm, inviting profile inspired by your prompt. Balanced spice and sweetness with woody depth.",
    formula: [
      { oil: "Cardamom", percentage: 15 },
      { oil: "Bergamot", percentage: 10 },
      { oil: "Vanilla", percentage: 25 },
      { oil: "Tonka Bean", percentage: 20 },
      { oil: "Cedarwood", percentage: 20 },
      { oil: "Amber", percentage: 10 },
    ],
  };

  function generateResults(data) {
    resultsContainer.innerHTML = `
      <div class="result-card">
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Prompt:</strong> "${data.prompt}"</p>
        <hr />
        <h2>🧪 Blend Name</h2>
        <p>${data.blendName}</p>
        <h3>🌸 Top Notes</h3>
        <p>${data.topNotes.join(", ")}</p>
        <h3>🌿 Middle Notes</h3>
        <p>${data.middleNotes.join(", ")}</p>
        <h3>🌲 Base Notes</h3>
        <p>${data.baseNotes.join(", ")}</p>
        <h3>📝 Description</h3>
        <p>${data.description}</p>
        <h3>🧫 Formula</h3>
        <ul>
          ${data.formula
            .map(
              (item) => `<li>${item.oil}: ${item.percentage}%</li>`
            )
            .join("")}
        </ul>
        <div class="button-group">
          <button onclick="window.print()">🖨️ Print</button>
          <button onclick="saveBlend()">💾 Save</button>
          <button onclick="remixBlend()">🔁 Remix</button>
        </div>
      </div>
    `;
  }

  generateResults(scentData);
});

// Placeholder for save functionality
function saveBlend() {
  alert("Save function will be implemented.");
}

// Placeholder for remix functionality
function remixBlend() {
  alert("Remix function will be implemented.");
}
