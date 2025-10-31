document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("scentForm");
  const resultContainer = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const prompt = document.getElementById("prompt").value;

    const data = {
      email: email,
      prompt: prompt,
      blendName: "Floral Citrus Musk",
      topNotes: ["Grapefruit", "Lemon Zest"],
      middleNotes: ["Jasmine", "Rose", "Neroli"],
      baseNotes: ["Musk", "Vetiver"],
      description:
        "A sophisticated blend with a crisp citrus opening, heart of white florals, and a rich musky foundation. Designed to feel fresh and luxurious.",
      formula: [
        { oil: "Grapefruit", percentage: 15 },
        { oil: "Lemon Zest", percentage: 10 },
        { oil: "Jasmine", percentage: 20 },
        { oil: "Rose", percentage: 15 },
        { oil: "Neroli", percentage: 10 },
        { oil: "Musk", percentage: 20 },
        { oil: "Vetiver", percentage: 10 },
      ],
    };

    displayResults(data);
  });

  function displayResults(data) {
    resultContainer.innerHTML = `
      <h2>Your Premium Custom Scent</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Prompt:</strong> “${data.prompt}”</p>
      <hr>
      <h3>🧪 Blend Name</h3>
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
      <label>Top Note Intensity:</label>
      <input type="range" min="0" max="100" value="60"><br>
      <label>Middle Note Intensity:</label>
      <input type="range" min="0" max="100" value="70"><br>
      <label>Base Note Intensity:</label>
      <input type="range" min="0" max="100" value="50"><br><br>
      <button onclick="window.print()">🖨️ Print</button>
      <button onclick="window.location.reload()">🔁 Remix</button>
    `;
  }
});
