const bikes = [
  {
    name: "Bajaj Pulsar N125",
    image: "./assets/Arrivals/bike1.png",
    specs: [
      "Engine: 124.45 cc, air-cooled, single-cylinder",
      "Power: 11.8 PS @ 8500 rpm",
      "Torque: 10.8 Nm @ 6500 rpm",
      "Transmission: 5-speed manual",
      "Fuel System: Fuel Injection (FI)",
      "Brakes: Front - 240 mm Disc / Rear - 130 mm Drum",
      "ABS: Single-channel ABS",
      "Frame Type: Tubular Frame",
      "Suspension: Telescopic front, Mono-shock rear",
      "Tyres: Front - 80/100-17, Rear - 100/90-17 (Tubeless)",
      "Kerb Weight: ~144 kg",
      "Fuel Tank Capacity: 14 litres",
      "Top Speed: Approx. 105 km/h",
      "Mileage: Around 50–55 km/l (real-world)"
    ],
    details: `<p>The <strong>Bajaj Pulsar N125</strong> brings muscular design and a premium commuter feel to the 125cc segment. It borrows styling cues from the bigger N-series Pulsars, featuring a sharp LED DRL, sculpted fuel tank, and aggressive stance that gives it a sporty presence on the road.</p>
      <p>Underneath, the N125 houses a 124.45 cc air-cooled engine paired with a 5-speed gearbox, delivering a punchy 11.8 PS of power and 10.8 Nm of torque. It’s tuned for smooth city performance and confident overtaking. The engine’s fuel-injection setup also improves efficiency and refinement.</p>
      <p>The Pulsar N125 boasts a segment-first perimeter frame for enhanced handling, paired with a mono-shock rear suspension for better ride comfort. Its braking setup with front disc and rear drum is supported by single-channel ABS for safer braking.</p>
      <p>Digital instrumentation, tubeless tyres, and modern styling make the Pulsar N125 a top choice for riders seeking both performance and daily usability in the 125cc category.</p>
      <p><strong>Expected Price in Nepal:</strong> Around NPR 2,50,000 (may vary by region and dealer).</p>`
  },
  {
    name: "Triumph Speed 400",
    image: "./assets/Arrivals/bike2.png",
    specs: [
      "Engine: 398.15 cc, liquid-cooled, single-cylinder DOHC",
      "Power: 40 PS @ 8000 rpm",
      "Torque: 37.5 Nm @ 6500 rpm",
      "Transmission: 6-speed with slipper clutch",
      "Fuel System: Electronic Fuel Injection",
      "Brakes: Front - 300 mm Disc, Rear - 230 mm Disc",
      "ABS: Dual-channel Bosch ABS",
      "Frame: Hybrid spine/perimeter tubular steel frame",
      "Suspension: Front - 43mm USD fork, Rear - Mono-shock with preload adjust",
      "Wheels: 17-inch alloys (110/70 F, 150/60 R)",
      "Console: Fully digital LCD with gear indicator and trip meter",
      "Top Speed: Approx. 160 km/h",
      "Kerb Weight: 176 kg",
      "Fuel Tank: 13 litres",
      "Mileage: 30–35 km/l (approx.)"
    ],
    details: `<p>The <strong>Triumph Speed 400</strong> is a modern-classic roadster developed under Triumph’s global partnership with Bajaj. Designed and built with Triumph’s DNA, the Speed 400 carries forward the brand’s hallmark: premium craftsmanship, refined performance, and signature styling.</p>
      <p>Powered by a 398.15 cc liquid-cooled DOHC engine, it produces an impressive 40 PS and 37.5 Nm torque — making it one of the most powerful single-cylinder bikes in its segment. The engine is tuned for smooth throttle response, mid-range punch, and a thrilling top-end performance, ideal for both city riding and weekend adventures.</p>
      <p>The bike rides on a perimeter-style frame supported by 43mm USD front forks and a mono-shock rear, ensuring agile handling and superior ride comfort. Braking duties are handled by large disc brakes with dual-channel Bosch ABS for top-tier safety.</p>
      <p>It also features ride-by-wire technology, all-LED lighting, a digital dash, and a slipper clutch for seamless downshifts — packaging modern tech into a classically styled streetbike.</p>
      <p>With its blend of heritage looks, aggressive performance, and high-end fit and finish, the Triumph Speed 400 is ideal for enthusiasts seeking premium motorcycling under 400cc.</p>
      <p><strong>Price in Nepal:</strong> Expected around NPR 8,50,000 – 9,00,000 (subject to import and registration).</p>`
  }
];

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalSpecs = document.getElementById("modalSpecs");
const modalDetails = document.getElementById("modalDetails");

function showModal(index) {
  const bike = bikes[index];
  console.log("BIKE:", bike);
  modalTitle.textContent = bike.name;
  modalImage.src = bike.image;

  // Clear previous specs
  modalSpecs.innerHTML = "";
  bike.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    modalSpecs.appendChild(li);
  });


  modalDetails.innerHTML = bike.details || "";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Optional: close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
