document.addEventListener("DOMContentLoaded", function () {
  const resultsContainer = document.getElementById("results");

  const scentData = {
    email: "user@email.com",
    prompt: "Elegant floral scent with citrus top notes and a musky base",
    blendName: "Floral Citrus Musk",
    topNotes: ["Grapefruit", "Lemon Zest"],
    middleNotes: ["Jasmine", "Rose", "Neroli"],
    baseNotes: ["Musk", "Vetiver"],
    description:
      "A sophisticated blend with a crisp citrus opening, heart of white florals, and a rich musky foundation. Designed to feel fresh and luxurious.",
    formula: [
      { oil: "Grapefruit", percentage: 20 },
      { oil: "Lemon Zest", percentage: 15 },
      { oil: "Jasmine", percentage: 20 },
      { oil: "Rose", percentage: 15 },
      { oil: "Neroli", percentage: 10 },
      { oil: "Musk", percentage: 10 },
      { oil: "Vetiver", percentage: 10 },
    ],
  };

  function generateResults(data) {
    resultsContainer.innerHTML = `
      <div class="result-card">
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Prompt:</strong> “${data.prompt}”</p>
        <hr />
        <h2>🧪 Blend Name</h2>
        <p>${data.blendName}</p>
        <h3>🍋 Top Notes</h3>
        <p>${data.topNotes.join(", ")}</p>
        <h3>🌸 Middle Notes</h3>
        <p>${data.middleNotes.join(", ")}</p>
        <h3>🌲 Base Notes</h3>
        <p>${data.baseNotes.join(", ")}</p>
        <h3>📝 Scent Description</h3>
        <p>${data.description}</p>
        <h3>📊 Formula</h3>
        <ul>
          ${data.formula
            .map((item) => `<li>${item.oil}: ${item.percentage}%</li>`)
            .join("")}
        </ul>
        <h3>🎛️ Adjustment Sliders</h3>
        <label>Top Note Intensity:</label><br/>
        <input type="range" min="0" max="100" value="60" /><br/><br/>
        <label>Middle Note Intensity:</label><br/>
        <input type="range" min="0" max="100" value="70" /><br/><br/>
        <label>Base Note Intensity:</label><br/>
        <input type="range" min="0" max="100" value="50" /><br/><br/>
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

function saveBlend() {
  alert("Save functionality coming soon.");
}

function remixBlend() {
  alert("Remix functionality coming soon.");
}
