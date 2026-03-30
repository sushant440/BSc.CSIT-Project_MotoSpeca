
  const hero = document.getElementById('hero');
  const images = [
     
    'assets/AIbike.png'
  ];
  let current = 0;
  let interval;

  function showImage(index) {
    current = (index + images.length) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
  }

  function nextImage() {
    showImage(current + 1);
    resetAutoSlide();
  }

  function prevImage() {
    showImage(current - 1);
    resetAutoSlide();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      showImage(current + 1);
    }, 10000); // 10 seconds
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Initial load
  showImage(current);
  startAutoSlide();


const bikes = [
 {
  name: "Bajaj Pulsar NS200",
  image: "assets/ns200.png",
  specs: [
    "Engine: 199.5 cc, 4-stroke, SOHC, 4-valve, liquid-cooled, single-cylinder",
    "Maximum Power: 24.5 PS @ 9750 rpm",
    "Maximum Torque: 18.74 Nm @ 8000 rpm",
    "Transmission: 6-speed manual gearbox",
    "Fuel System: Fuel Injection (FI)",
    "Brakes: Front - 300 mm Disc, Rear - 230 mm Disc",
    "ABS: Dual-channel ABS for enhanced safety",
    "Suspension: Telescopic front forks and Nitrox mono-shock rear",
    "Frame Type: Perimeter frame for superior handling",
    "Tyres: Tubeless – Front: 100/80-17, Rear: 130/70-17",
    "Fuel Tank Capacity: 12 litres",
    "Top Speed: Approximately 136 km/h",
    "Mileage: Around 35-40 km/l (real-world conditions)",
    "Kerb Weight: 158 kg",
    "Console Features: Digital-analog instrument cluster, gear shift indicator, trip meter, and clock"
  ],
  details: `The Bajaj Pulsar NS200 is priced approximately at NPR 4,15,000 in Nepal (may vary slightly by region and dealer). 
  Known for its aggressive styling and sharp streetfighter design, the NS200 appeals strongly to young riders who enjoy performance with everyday usability.<br><br>

  It comes with premium features like a perimeter frame for better cornering stability, a liquid-cooled engine for sustained high performance, and a dual-channel ABS system that adds confidence during hard braking.<br>
  The bike also includes modern elements like backlit switches, a split-seat design, and a digital-analog cluster that displays essential ride data.<br><br<

  Whether you're looking for a daily commuter with attitude or a weekend thrill machine, the NS200 offers a well-balanced mix of power, style, and reliability.`
},

 {
  name: "Yamaha R15 V4",
  image: "assets/R15M-0-300x214.png",
  specs: [
    "Engine: 155 cc, Liquid-cooled, SOHC, 4-valve",
    "Power: 18.4 PS @ 10,000 rpm",
    "Torque: 14.2 Nm @ 7,500 rpm",
    "Brakes: Front & Rear Disc",
    "ABS: Dual Channel"
  ],
  details: `<p>The Yamaha R15 V4 is a high-performance sportbike designed for riders who demand both style and cutting-edge technology. Its aggressive full-fairing design is inspired by Yamaha's MotoGP race machines, offering enhanced aerodynamics and sharp aesthetics.</p>
            <p>Powered by a 155cc liquid-cooled engine equipped with Variable Valve Actuation (VVA), the R15 V4 delivers smooth power across the rev range, peaking at 18.4 PS. The 6-speed transmission and assist & slipper clutch ensure quick, seamless gear shifts and enhanced control during aggressive downshifting.</p>
            <p>Advanced features include a fully digital LCD instrument cluster with smartphone connectivity, LED headlights, and a lightweight delta box frame that improves stability and handling. Dual-channel ABS adds safety during hard braking.</p>
            <p>The bike’s ergonomics blend sporty riding posture with comfort, making it suitable for both city commuting and spirited weekend rides.</p>
            <p><strong>Price:</strong> Approximately NPR 5,25,000 (may vary by dealer and region).</p>`
},

{
  name: "TVS Apache RTR 160",
  image: "./assets/APACHE 160.png",
  specs: [
    "Engine: 159.7 cc",
    "Power: 16.04 PS @ 8750 rpm",
    "Torque: 13.85 Nm @ 7000 rpm",
    "Brakes: Front Disc, Rear Drum",
    "ABS: Single Channel"
  ],
   details: `<p>The TVS Apache RTR 160 combines sporty looks with practical performance for daily commuting and weekend fun. Its muscular design is enhanced by race-inspired graphics, LED DRLs, and a sharp tail section.</p>
            <p>Equipped with a 159.7cc engine producing 16.04 PS and supported by TVS's Glide Through Technology (GTT), it offers smooth throttle response and effortless maneuverability in city traffic.</p>
            <p>The bike features a race-tuned suspension setup for better handling, a digital-analog instrument cluster with real-time fuel efficiency, and a single-channel ABS system to ensure rider safety.</p>
            <p>Comfortable ergonomics and a light frame make the RTR 160 a practical choice for beginners and seasoned riders alike.</p>
            <p><strong>Price:</strong> Around NPR 3,30,000 (subject to local taxes and dealer charges).</p>`
},

{
  name: "KTM Duke 200",
  image: "assets/DUKE 200.webp",
  specs: [
    "Engine displacement: 199.5 cc",
    "Power: ~25 PS (19 kW) @ 10,000 rpm",
    "Torque: ~19.3 Nm @ 8,000 rpm",
    "Brakes:",
    "->Front: 300 mm disc",
    "->Rear: 230 mm disc",
    "ABS: Dual-channel (Bosch) ABS standard"
  ],
  details: `<p>The KTM Duke 200 is a naked performance bike built for adrenaline and agility. Its lightweight trellis frame, WP suspension, and high-revving liquid-cooled engine deliver thrilling performance with razor-sharp handling.</p>
            <p>It features aggressive street styling, all-LED lighting, and a fully digital instrument cluster. The Duke 200 also includes a Bosch dual-channel ABS system for precise braking and added safety.</p>
            <p>Price in Nepal: Approx. NPR 5,64,900.</p>`
},

{
  name: "Yamaha MT‑15",
  image: "assets/Yamaha-mt-15-nepal-rbg.png",
  specs: [
    "Engine: 155 cc, Liquid-cooled, SOHC",
    "Power: 18.4 PS @ 10,000 rpm",
    "Torque: 14.1 Nm @ 7,500 rpm",
    "Brakes: Front: 282 mm Disc, Rear: 220 mm Disc",
    "ABS: Single Channel"
  ],
  details: `<p>The Yamaha MT-15 is a compact streetfighter that brings the dark side of Japan to the streets. Based on the R15 platform, it offers similar performance with a more upright and urban-friendly riding posture.</p>
            <p>It includes features like Variable Valve Actuation (VVA), assist & slipper clutch, and a digital negative LCD console. Its aggressive looks and agile performance make it a favorite among new-generation riders.</p>
            <p>Price in Nepal: Around NPR 4,75,000.</p>`
},
   // 🆕 Honda Bikes
 {
  name: "Honda X Blade",
  image: "./assets/Honda/bike1.png",
  specs: [
    "Engine: 162.71 cc",
    "Power: 13.67 bhp @ 8000 rpm",
    "Torque: 14.7 Nm @ 5500 rpm",
    "Brakes: Front Disc, Rear Drum",
    "ABS: Single Channel"
  ],
  details: `<p>The Honda X Blade is a sleek and sporty street bike that combines aggressive styling with practical performance tailored for urban commuting and occasional long rides.</p>
            <p>Powered by a 162.71 cc air-cooled engine, it delivers a refined 13.67 bhp power output with smooth torque of 14.7 Nm, ensuring responsive acceleration and effortless maneuverability in city traffic.</p>
            <p>The bike features a muscular and aerodynamic body with sharp body lines, a digital instrument cluster, and LED tail lamps, enhancing its modern look.</p>
            <p>Safety is prioritized with front disc brakes and rear drum brakes complemented by a single-channel ABS system, providing reliable stopping power under varied road conditions.</p>
            <p>Comfort is addressed through a well-cushioned split seat, a balanced riding posture, and nimble handling, making the X Blade a strong contender in the commuter segment.</p>
            <p><strong>Price in Nepal:</strong> Approximately NPR 3,20,000 (may vary by region and dealer).</p>`
},

{
  name: "Honda NX 200",
  image: "./assets/Honda/bike2.png",
  specs: [
    "Engine: 184.4 cc",
    "Power: 17 bhp @ 8500 rpm",
    "Torque: 16.1 Nm @ 6000 rpm",
    "Brakes: Front & Rear Disc",
    "ABS: Single Channel"
  ],
  details: `<p>The Honda NX 200 is a robust and versatile motorcycle that strikes a perfect balance between performance, comfort, and style, making it suitable for a wide range of riders from daily commuters to weekend adventurers.</p>
            <p>Its 184.4 cc air-cooled engine generates a strong 17 bhp and 16.1 Nm torque, offering quick throttle response and smooth power delivery across urban and highway scenarios.</p>
            <p>Equipped with dual disc brakes front and rear and a single-channel ABS system, the bike ensures effective and confident braking even during sudden stops.</p>
            <p>With a muscular fuel tank, sharp LED headlamp, and aggressive styling, the NX 200 presents a commanding road presence that appeals to younger riders.</p>
            <p>The comfortable upright riding position combined with well-tuned suspension aids in long-distance riding comfort and handling agility.</p>
            <p><strong>Price in Nepal:</strong> Around NPR 3,80,000 (price varies with taxes and dealer).</p>`
},

{
  name: "Honda CB 350",
  image: "./assets/Honda/bike3.png",
  specs: [
    "Engine: 348.36 cc",
    "Power: 20.78 bhp @ 5500 rpm",
    "Torque: 30 Nm @ 3000 rpm",
    "Brakes: Front & Rear Disc",
    "ABS: Dual Channel"
  ],
  details: `<p>The Honda CB 350 is a classic retro cruiser that effortlessly blends timeless style with modern reliability, appealing to riders seeking both comfort and a vintage aesthetic.</p>
            <p>Its 348.36 cc single-cylinder engine delivers a smooth 20.78 bhp and an impressive 30 Nm of torque at a low 3000 rpm, providing effortless cruising capabilities and easy highway overtaking power.</p>
            <p>Dual-channel ABS and disc brakes on both ends enhance safety, while the bike’s comfortable saddle, upright seating, and wide handlebars ensure rider and passenger comfort on long journeys.</p>
            <p>Retro design elements such as a round LED headlamp, chrome-finished exhaust, and classic fuel tank styling make it stand out in the modern cruiser market.</p>
            <p>The CB 350 is a perfect blend of style, substance, and comfort for motorcycle enthusiasts who value character and craftsmanship.</p>
            <p><strong>Price in Nepal:</strong> Approximately NPR 5,80,000 (subject to taxes and availability).</p>`
},

{
  name: "Honda CBR 600",
  image: "./assets/Honda/bike4.png",
  specs: [
    "Engine: 599 cc",
    "Power: ~120 bhp",
    "Torque: ~66 Nm",
    "Brakes: Front & Rear Disc",
    "ABS: Dual Channel"
  ],
  details: `<p>The Honda CBR 600 is an iconic sportbike celebrated for its track-proven performance, precise handling, and advanced engineering.</p>
            <p>Its 599 cc inline-four engine produces a robust 120 bhp and 66 Nm of torque, offering exhilarating acceleration and high-speed stability, perfect for aggressive riders and racing enthusiasts.</p>
            <p>Equipped with sophisticated suspension, dual-channel ABS, and aerodynamic bodywork, the CBR 600 delivers razor-sharp cornering and confidence-inspiring braking.</p>
            <p>Modern amenities include a fully digital instrument cluster, LED lighting, and premium braking components, making it a formidable machine both on the road and the racetrack.</p>
            <p>This bike suits experienced riders who desire race-inspired performance without compromising everyday usability.</p>
            <p><strong>Price in Nepal:</strong> Approximately NPR 15,00,000 (varies with import duties and dealer).</p>`
},

{
  name: "Honda Gold Wing",
  image: "./assets/Honda/bike5.png",
  specs: [
    "Engine: 1833 cc, 6-cylinder",
    "Power: 125 bhp",
    "Torque: 170 Nm",
    "Brakes: Dual disc front, Single disc rear",
    "ABS: Dual Channel"
  ],
  details: `<p>The Honda Gold Wing represents the pinnacle of luxury touring motorcycles, combining exceptional power, comfort, and cutting-edge technology designed for long-distance journeys.</p>
            <p>Its massive 1833 cc 6-cylinder engine produces a smooth and reliable 125 bhp and 170 Nm of torque, enabling effortless highway cruising and quick acceleration even with heavy luggage and passengers.</p>
            <p>The Gold Wing is equipped with advanced features including premium suspension, dual front disc brakes, single rear disc, and comprehensive dual-channel ABS for superior stopping power.</p>
            <p>Comfort and convenience abound with cruise control, integrated navigation, an advanced infotainment system, heated grips, and spacious seating for rider and passenger, making it ideal for extended tours.</p>
            <p>Meticulously engineered for unparalleled comfort and performance, the Gold Wing is the ultimate choice for riders who demand the very best in luxury motorcycling.</p>
            <p><strong>Price in Nepal:</strong> Approximately NPR 60,00,000 (may vary significantly due to import and customization).</p>`
},

  //Yamaha Bikes
  {
  name: "Yamaha MT-15",
  image: "./assets/Yamaha/bike1.png",
  specs: [
    "Engine: 155 cc, Liquid-cooled, SOHC",
    "Power: 18.4 PS @ 10,000 rpm",
    "Torque: 14.1 Nm @ 7,500 rpm",
    "Brakes: Front: 282 mm Disc, Rear: 220 mm Disc",
    "ABS: Single Channel"
  ],
  details: `<p>The Yamaha MT-15 is a street-naked motorcycle built for agility and aggressive urban performance. With its sharp design, futuristic LED headlamp, and muscular tank, it reflects a bold road presence.</p>
<p>It is powered by a 155 cc liquid-cooled, SOHC engine with Variable Valve Actuation (VVA), offering a peppy 18.4 PS power output and 14.1 Nm of torque. This ensures excellent mid- and high-range performance.</p>
<p>The lightweight frame and upright riding stance make it extremely flickable and easy to maneuver through traffic. The MT-15 also features a digital instrument cluster and premium build quality for its segment.</p>
<p>Single-channel ABS and front/rear disc brakes enhance safety and control.</p>
<p><strong>Price in Nepal:</strong> Approximately NPR 4,50,000 (varies by dealer and city).</p>`

},
{
  name: "Yamaha R15 V4",
  image: "./assets/Yamaha/bike2.png",
  specs: [
    "Engine: 155 cc, Liquid-cooled, SOHC, 4-valve",
    "Power: 18.4 PS @ 10,000 rpm",
    "Torque: 14.2 Nm @ 7,500 rpm",
    "Brakes: Front & Rear Disc",
    "ABS: Dual Channel"
  ],
  details: `<p>The Yamaha R15 V4 is a race-inspired sportbike designed for enthusiasts who crave performance and style. It inherits styling cues from the YZF-R1, including the aggressive fairing, LED headlamps, and aerodynamic bodywork.</p>
<p>Powered by a 155 cc liquid-cooled SOHC engine with VVA technology, it produces 18.4 PS of power and 14.2 Nm of torque, delivering top-tier performance in the 150cc segment.</p>
<p>Dual-channel ABS, traction control (in some variants), and an assist/slipper clutch make the R15 V4 a high-tech machine ideal for sporty road use and occasional track days.</p>
<p>Its digital instrument console features Bluetooth connectivity, gear position indicator, and ride telemetry features.</p>
<p><strong>Price in Nepal:</strong> Around NPR 5,40,000 to NPR 5,90,000 depending on variant and dealer.</p>`

},
{
  name: "Yamaha FZS V3",
  image: "./assets/Yamaha/bike3.png",
  specs: [
    "Engine: 149 cc, Air-cooled, SOHC",
    "Power: 12.4 PS @ 7250 rpm",
    "Torque: 13.3 Nm @ 5500 rpm",
    "Brakes: Front Disc, Rear Drum/Disc",
    "ABS: Single Channel"
  ],
  details: `<p>The Yamaha FZS V3 is a stylish and muscular street bike, known for its practical performance, comfort, and everyday usability. It features a bulkier fuel tank, LED headlight, and Bluetooth-enabled instrument cluster.</p>
<p>The 149 cc air-cooled engine provides a smooth and refined ride with a power output of 12.4 PS and 13.3 Nm torque, ideal for city commutes and occasional highway rides.</p>
<p>Suspension is tuned for comfort, while the wide seats and upright ergonomics make it great for long hours in traffic.</p>
<p>It comes with single-channel ABS, optional rear disc, and Eco Indicator for fuel-conscious riders.</p>
<p><strong>Price in Nepal:</strong> Approximately NPR 3,45,000.</p>`

},
{
  name: "Yamaha WR 155R",
  image: "./assets/Yamaha/bike4.png",
  specs: [
    "Engine: 155 cc, Liquid-cooled, VVA",
    "Power: 16.5 PS @ 10,000 rpm",
    "Torque: 14.3 Nm @ 6500 rpm",
    "Brakes: Front & Rear Disc",
    "ABS: Not Available"
  ],
  details: `<p>The Yamaha WR 155R is a dual-sport off-road motorcycle, engineered for both city travel and adventurous terrains. With a rugged design, long-travel suspension, and spoke wheels, it’s built to tackle rough roads and trails.</p>
<p>It is powered by the same 155 cc liquid-cooled engine with VVA as the R15, producing 16.5 PS and 14.3 Nm of torque, tuned for better torque delivery at low to mid RPMs — ideal for dirt conditions.</p>
<p>The lightweight frame, high ground clearance, and knobby tyres make it a capable off-roader while being road-legal for city rides.</p>
<p>While ABS is not available, the braking setup offers strong bite and feedback suitable for its purpose.</p>
<p><strong>Price in Nepal:</strong> Around NPR 5,50,000 (may vary).</p>`

},
{
  name: "Yamaha FZX",
  image: "./assets/Yamaha/bike5.png",
  specs: [
    "Engine: 149 cc, Air-cooled",
    "Power: 12.4 PS @ 7250 rpm",
    "Torque: 13.3 Nm @ 5500 rpm",
    "Brakes: Front Disc, Rear Drum",
    "ABS: Single Channel"
  ],
  details: `<p>The Yamaha FZX is a retro-modern commuter that blends classic styling with modern functionality. It features a round LED headlamp, teardrop fuel tank, and upright riding posture inspired by neo-retro design.</p>
<p>Under the tank lies a 149 cc air-cooled engine producing 12.4 PS and 13.3 Nm of torque, offering calm and refined performance for city use.</p>
<p>It is built for comfort, featuring a wide single-piece seat, high handlebar, and a plush suspension setup.</p>
<p>The FZX also gets Bluetooth connectivity, call alerts, and fuel efficiency tracking via Yamaha's Y-Connect app.</p>
<p><strong>Price in Nepal:</strong> Estimated NPR 3,65,000.</p>`

},
{
  name: "KTM RC 200",
  image: "./assets/KTM/bike1.png",
  specs: [
    "Engine: 199.5 cc, Liquid-cooled, Single-cylinder, 4-stroke, DOHC",
    "Power: 25 PS @ 10,000 rpm",
    "Torque: 19.5 Nm @ 8000 rpm",
    "Transmission: 6-speed gearbox with slipper clutch",
    "Fuel System: Bosch Electronic Fuel Injection (EFI)",
    "Brakes: Front - 320 mm Disc, Rear - 230 mm Disc",
    "ABS: Dual-channel Bosch ABS with Supermoto mode",
    "Chassis: Steel trellis frame, powder-coated",
    "Suspension: WP APEX USD front fork (43 mm), WP APEX monoshock rear",
    "Tyres: Front - 110/70-R17, Rear - 150/60-R17, Metzeler M5",
    "Weight: 160 kg (Kerb)",
    "Fuel Tank Capacity: 13.7 litres",
    "Top Speed: ~140 km/h",
    "Console: Fully digital LCD with gear indicator, real-time mileage, and shift light"
  ],
  details: `<p>The KTM RC 200 is a lightweight, fully-faired sportbike built for high-revving excitement and sharp handling. With its MotoGP-inspired design, aggressive dual projector LED headlamps, and aerodynamic fairings, it commands attention both on and off the track.</p>
<p>The bike’s 199.5 cc engine delivers 25 PS of power, paired with a quick-shifting 6-speed gearbox and slipper clutch for smoother downshifts. The advanced Bosch EFI system ensures crisp throttle response and fuel efficiency.</p>
<p>The RC 200’s steel trellis frame, WP APEX suspension setup, and Metzeler tyres deliver confident cornering performance. Dual-channel ABS with Supermoto mode allows rear ABS deactivation for stunting or advanced cornering control.</p>
<p>This bike is perfect for young riders looking for track-oriented styling and performance without breaking the bank.</p>
<p><strong>Price in Nepal:</strong> Approximately NPR 5,65,000 (may vary by region and dealer).</p>`
},
{
  name: "KTM Duke 390",
  image: "./assets/KTM/bike2.png",
  specs: [
    "Engine: 373.2 cc, Liquid-cooled, Single-cylinder, DOHC, 4-valve",
    "Power: 43.5 PS @ 9000 rpm",
    "Torque: 37 Nm @ 7000 rpm",
    "Transmission: 6-speed gearbox with slipper clutch & quickshifter",
    "Fuel System: Bosch EFI with ride-by-wire throttle",
    "Brakes: Front - 320 mm disc, Rear - 230 mm disc (ByBre calipers)",
    "ABS: Dual-channel Bosch ABS with Supermoto mode",
    "Chassis: Steel trellis frame with bolt-on subframe",
    "Suspension: WP APEX 43 mm USD fork, WP APEX rear monoshock",
    "Tyres: Front - 110/70-17, Rear - 150/60-17 (Metzeler radial)",
    "Fuel Tank Capacity: 13.4 litres",
    "Weight: 171 kg (Kerb)",
    "Top Speed: ~167 km/h",
    "Console: 5-inch TFT display with Bluetooth, turn-by-turn navigation, and ride data"
  ],
  details: `<p>The KTM Duke 390 is a street-naked machine designed for those who crave premium performance, tech, and street presence. Often referred to as the "corner rocket," the Duke 390 boasts a sharp trellis frame, lightweight body, and aggressive ergonomics that make every ride thrilling.</p>
<p>Its 373.2 cc engine churns out 43.5 PS and 37 Nm of torque, capable of delivering insane acceleration. With a slipper clutch and quickshifter, gear transitions are lightning-fast, perfect for both city sprints and weekend twisties.</p>
<p>The TFT console adds premium feel with full-color graphics, call/SMS alerts, and rider information. Features like ride-by-wire throttle, dual-channel ABS with Supermoto mode, and Metzeler radial tyres push the Duke 390 into a category of its own in the segment.</p>
<p>Whether you're a city commuter, canyon carver, or a weekend thrill-seeker, the Duke 390 stands out with unmatched tech and power.</p>
<p><strong>Price in Nepal:</strong> Around NPR 9,75,000 (depending on dealer, taxes, and model year).</p>`
},
{
  name: "KTM 390 Adventure",
  image: "./assets/KTM/bike3.png",
  specs: [
    "Engine: 373.2 cc, Liquid-cooled, Single-cylinder, DOHC, 4-valve",
    "Power: 43.5 PS @ 9000 rpm",
    "Torque: 37 Nm @ 7000 rpm",
    "Transmission: 6-speed gearbox with slipper clutch & quickshifter",
    "Fuel System: Bosch EFI with ride-by-wire",
    "Brakes: Front - 320 mm disc, Rear - 230 mm disc (ByBre)",
    "ABS: Bosch Dual-channel ABS with off-road mode (rear ABS deactivates)",
    "Frame: Steel trellis frame with bolt-on subframe",
    "Suspension: WP APEX 43 mm USD long-travel fork, WP APEX rear monoshock",
    "Ground Clearance: 200 mm",
    "Tyres: Dual-purpose tubeless – Front: 100/90-19, Rear: 130/80-17",
    "Console: TFT display with Bluetooth and navigation support",
    "Fuel Tank: 14.5 litres",
    "Weight: 177 kg (Kerb)",
    "Top Speed: ~170 km/h"
  ],
  details: `<p>The KTM 390 Adventure is the most accessible adventure touring motorcycle in KTM’s global ADV lineup. Built on the Duke 390’s high-performance engine, it combines tech, comfort, and off-road prowess to deliver a versatile touring experience.</p>
<p>This adventure machine features long-travel WP APEX suspension, dual-purpose tyres, high ground clearance, and an upright seating position, allowing it to confidently tackle highways, mountain roads, and dirt tracks alike.</p>
<p>It includes advanced rider aids like off-road ABS (disengage rear), traction control, cornering ABS, ride-by-wire throttle, and a full TFT dashboard with smartphone connectivity and navigation. A quickshifter (in newer models) further boosts long-distance rideability.</p>
<p>For riders in Nepal who want to combine daily city travel with cross-country adventures or mountain touring, the 390 Adventure offers the best of both worlds — agility of a lightweight bike and the equipment of a premium tourer.</p>
<p><strong>Price in Nepal:</strong> Approximately NPR 10,45,000 to NPR 10,90,000 (varies with availability and import taxes).</p>`
},
 {
    name: "Bajaj Pulsar NS 400",
    image: "./assets/Bajaj/bike1.png",
    specs: [
      "Engine: 373.27 cc, 4-valve, liquid-cooled, FI, DOHC",
      "Power: 40 PS @ 8800 rpm",
      "Torque: 35 Nm @ 6500 rpm",
      "Transmission: 6-speed with assist & slipper clutch",
      "Brakes: Front - 320 mm Disc, Rear - 230 mm Disc",
      "ABS: Dual-channel with switchable Supermoto mode",
      "Frame: Perimeter frame for enhanced handling",
      "Suspension: USD forks (front), mono-shock (rear)",
      "Tyres: Radial, tubeless - Front: 110/70-17, Rear: 140/70-17",
      "Console: Fully digital with Bluetooth connectivity and turn-by-turn navigation",
      "Top Speed: ~150 km/h",
      "Fuel Tank Capacity: 12 litres",
      "Weight: Approx. 174 kg (kerb)"
    ],
    details: `<p>The Bajaj Pulsar NS 400 marks a new chapter in Bajaj's streetfighter lineup, merging the aggressive DNA of the Pulsar family with the proven powerplant from the Dominar 400. Designed for enthusiasts who demand performance, style, and tech, this bike is built to conquer both city roads and highways with ease.</p>
              <p>Its 373.27 cc engine with a DOHC setup and liquid cooling delivers robust power while maintaining refinement. The inclusion of a slipper clutch and 6-speed gearbox enhances sporty riding while minimizing fatigue during downshifts. The USD front forks and mono-shock rear ensure agile handling and ride comfort over Nepal’s varying terrain.</p>
              <p>Safety is enhanced with a switchable dual-channel ABS and large petal discs that offer superior bite. A modern digital console adds a layer of sophistication with features like turn-by-turn navigation and gear indicators. The NS 400 is for riders looking for power and practicality in a head-turning design.</p>
              <p><strong>Price in Nepal:</strong> Expected around NPR 5,50,000 – 6,00,000 (subject to official release and dealer pricing).</p>`
  },
  {
    name: "Bajaj Pulsar NS 200",
    image: "./assets/Bajaj/bike2.png",
    specs: [
      "Engine: 199.5 cc, 4-stroke, SOHC, 4-valve, liquid-cooled",
      "Power: 24.5 PS @ 9750 rpm",
      "Torque: 18.74 Nm @ 8000 rpm",
      "Transmission: 6-speed manual",
      "Fuel System: Fuel Injection",
      "Brakes: 300 mm Disc (Front), 230 mm Disc (Rear)",
      "ABS: Dual-channel",
      "Frame: Perimeter Frame",
      "Suspension: Telescopic front, Nitrox mono-shock rear",
      "Top Speed: ~136 km/h",
      "Mileage: 35-40 km/l (real-world)",
      "Weight: 158 kg",
      "Tank Capacity: 12 litres"
    ],
    details: `<p>The Pulsar NS 200 continues to be one of the most sought-after street bikes in the 200cc segment thanks to its combination of performance, affordability, and aggressive styling. It’s powered by a refined liquid-cooled engine that performs impressively even under stress and heat — ideal for Nepal’s climate.</p>
              <p>The dual-channel ABS and beefy perimeter frame ensure safety and stability during aggressive maneuvers. This bike is especially popular among young riders who are looking for a high-performance commuter that also doubles as a weekend thrill machine.</p>
              <p>The digital-analog console is easy to read, and the riding position strikes a good balance between comfort and sportiness.</p>
              <p><strong>Price in Nepal:</strong> Around NPR 4,15,000.</p>`
  },
  {
    name: "Bajaj Pulsar N250",
    image: "./assets/Bajaj/bike3.png",
    specs: [
      "Engine: 249.07 cc, SOHC, oil-cooled",
      "Power: 24.5 PS @ 8750 rpm",
      "Torque: 21.5 Nm @ 6500 rpm",
      "Transmission: 5-speed with assist & slipper clutch",
      "Brakes: 300 mm Disc (Front), 230 mm Disc (Rear)",
      "ABS: Dual-channel",
      "Lighting: All-LED headlamp with DRL",
      "Console: Digital speedometer with gear indicator and distance-to-empty",
      "Suspension: Telescopic front, Mono-shock with Nitrox rear",
      "Weight: 162 kg",
      "Top Speed: ~135 km/h",
      "Fuel Tank: 14 litres"
    ],
    details: `<p>The Bajaj Pulsar N250 brings modern muscular design and torquey performance to the Pulsar series. It has a forward-biased streetfighter stance, bold tank shrouds, and LED lighting that enhance its visual appeal on the road.</p>
              <p>Its oil-cooled engine delivers instant low-end torque, making it very practical for traffic-heavy city conditions and hilly roads. The assist & slipper clutch is a segment-first feature that makes downshifting smooth and reduces rider fatigue.</p>
              <p>Tech-wise, the bike includes a semi-digital display, USB charging port, and distance-to-empty readouts, catering to urban riders who appreciate both form and function.</p>
              <p><strong>Price in Nepal:</strong> Around NPR 4,40,000 – 4,60,000.</p>`
  },
  {
    name: "Bajaj Pulsar 150",
    image: "./assets/Bajaj/bike4.png",
    specs: [
      "Engine: 149.5 cc, air-cooled, DTS-i",
      "Power: 14 PS @ 8500 rpm",
      "Torque: 13.25 Nm @ 6500 rpm",
      "Transmission: 5-speed",
      "Brakes: Front Disc, Rear Drum",
      "Suspension: Telescopic front, Twin shocks rear",
      "Fuel Tank: 15 litres",
      "Mileage: 45-50 km/l",
      "Weight: 148 kg"
    ],
    details: `<p>The Pulsar 150 is one of the longest-standing and highest-selling motorcycles in South Asia due to its bulletproof reliability and balance of performance and fuel economy. It’s well-suited for both students and working professionals.</p>
              <p>With a comfortable upright riding posture, wide seat, and soft suspension setup, the Pulsar 150 is a capable daily commuter. Its 15-litre tank and good mileage offer long-range convenience, and the punchy engine provides sufficient power for overtaking and uphill climbs.</p>
              <p><strong>Price in Nepal:</strong> Approximately NPR 3,10,000.</p>`
  },
  {
    name: "Bajaj Pulsar 220F",
    image: "./assets/Bajaj/bike5.png",
    specs: [
      "Engine: 220 cc, air/oil-cooled, DTS-i",
      "Power: 20.4 PS @ 8500 rpm",
      "Torque: 18.55 Nm @ 7000 rpm",
      "Transmission: 5-speed",
      "Brakes: Front and Rear Disc",
      "ABS: Single-channel",
      "Suspension: Telescopic front, Twin spring rear",
      "Fuel Tank: 15 litres",
      "Top Speed: ~135 km/h",
      "Weight: 160 kg"
    ],
    details: `<p>The Pulsar 220F remains iconic among enthusiasts, loved for its semi-faired design, throaty exhaust note, and highway-cruising capability. It combines commuter-friendly ergonomics with highway-grade performance, making it one of Nepal’s top-value all-rounders.</p>
              <p>The projector headlamp provides excellent nighttime visibility, and the robust chassis inspires confidence even at high speeds. It's also one of the few semi-faired bikes still available in its price range.</p>
              <p><strong>Price in Nepal:</strong> Around NPR 3,65,000.</p>`
  },
  {
    name: "Bajaj Dominar 400V",
    image: "./assets/Bajaj/bike6.png",
    specs: [
      "Engine: 373.3 cc, DOHC, liquid-cooled, triple-spark",
      "Power: 40 PS @ 8650 rpm",
      "Torque: 35 Nm @ 7000 rpm",
      "Transmission: 6-speed with slipper clutch",
      "Suspension: 43 mm USD forks (front), Mono-shock (rear)",
      "Brakes: 320 mm Disc (Front), 230 mm Disc (Rear)",
      "ABS: Dual-channel Bosch ABS",
      "Lighting: Full LED",
      "Console: Twin digital displays with trip data, clock, gear position",
      "Top Speed: ~150 km/h",
      "Fuel Tank: 13 litres",
      "Weight: 193 kg"
    ],
    details: `<p>The Dominar 400V is Bajaj’s flagship performance cruiser, offering the power of a touring machine and the agility of a naked bike. It’s built for long rides, highway stability, and loaded with premium features like USD forks, LED lights, and a split digital console.</p>
              <p>The high-torque engine with a slipper clutch and 6-speed gearbox delivers punchy acceleration and smooth cruising. The bike’s twin-spar frame ensures superb high-speed stability while the dual-channel ABS and powerful braking setup keep safety in check.</p>
              <p>Ideal for riders seeking an entry-level touring or adventure bike without breaking the bank, the Dominar also accommodates luggage options and pillion comfort.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 5,90,000 – 6,20,000.</p>`
  },
  // Royal Enfield Bikes
  {
    name: "Royal Enfield Classic 350",
    image: "./assets/rf/bike1.png",
    specs: [
      "Engine: 349 cc, single-cylinder, air-oil cooled",
      "Power: 20.2 PS @ 6100 rpm",
      "Torque: 27 Nm @ 4000 rpm",
      "Transmission: 5-speed constant mesh",
      "Suspension: Telescopic front fork, twin rear shock absorbers",
      "Brakes: 300 mm Disc (Front), 270 mm Disc (Rear)",
      "ABS: Dual-channel",
      "Lighting: Halogen headlamp, LED tail lamp",
      "Console: Semi-digital with analog speedometer, odometer, trip meter, fuel gauge",
      "Top Speed: ~114 km/h",
      "Fuel Tank: 13 litres",
      "Weight: 195 kg"
    ],
    details: `<p>The <strong>Royal Enfield Classic 350</strong> carries forward the legacy of the legendary Bullet line, blending timeless retro design with contemporary engineering. The thumping exhaust note, teardrop tank, and metal body reflect its old-school charm, while the updated J-series engine offers significantly smoother performance and reduced vibration.</p>
              <p>It is ideal for daily commuting and long leisure rides, thanks to its upright seating position and torque-rich engine. The dual-channel ABS ensures safety, and its customizable design allows riders to personalize it easily.</p>
              <p>With robust build quality and reliability, the Classic 350 is perfect for those who value heritage along with practicality.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 5,30,000 – 5,80,000.</p>`
  },
  {
    name: "Royal Enfield Hunter 350",
    image: "./assets/rf/bike2.png",
    specs: [
      "Engine: 349 cc, air-oil cooled, single-cylinder",
      "Power: 20.2 PS @ 6100 rpm",
      "Torque: 27 Nm @ 4000 rpm",
      "Transmission: 5-speed manual",
      "Suspension: Telescopic forks (front), Twin-tube emulsion shocks (rear)",
      "Brakes: 300 mm Disc (Front), 270 mm Disc (Rear)",
      "ABS: Dual-channel",
      "Lighting: Halogen headlamp, LED tail lamp",
      "Console: Analog-digital with optional Tripper Navigation",
      "Top Speed: ~115 km/h",
      "Fuel Tank: 13 litres",
      "Weight: 181 kg"
    ],
    details: `<p>The <strong>Hunter 350</strong> is Royal Enfield’s most nimble and urban-focused motorcycle. Designed for city riders who crave style and maneuverability, it delivers peppy performance and agile handling while maintaining the company’s signature retro aesthetic.</p>
              <p>It features the same reliable J-series engine as the Classic, but with tighter ergonomics, a shorter wheelbase, and lower curb weight, making it easy to flick through traffic and fun to ride on twisty roads.</p>
              <p>The Hunter 350 is especially appealing to younger riders or beginners looking for an accessible Royal Enfield with modern appeal.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 4,50,000 – 4,90,000.</p>`
  },
  {
    name: "Royal Enfield Meteor 350",
    image: "./assets/rf/bike3.png",
    specs: [
      "Engine: 349 cc, air-oil cooled, single-cylinder",
      "Power: 20.2 PS @ 6100 rpm",
      "Torque: 27 Nm @ 4000 rpm",
      "Transmission: 5-speed gearbox",
      "Suspension: 41 mm Telescopic forks (front), Twin-tube emulsion shocks with adjustable preload (rear)",
      "Brakes: 300 mm Disc (Front), 270 mm Disc (Rear)",
      "ABS: Dual-channel",
      "Lighting: LED DRL, Halogen main beam, LED tail light",
      "Console: Digital-analog combo with Tripper Navigation (Bluetooth enabled)",
      "Top Speed: ~120 km/h",
      "Fuel Tank: 15 litres",
      "Weight: 191 kg"
    ],
    details: `<p>The <strong>Meteor 350</strong> is Royal Enfield’s take on a modern cruiser. With a laid-back riding position, cushioned seats, and stable ride dynamics, it’s built for comfort over long distances.</p>
              <p>The Meteor debuts the J-series engine platform, known for its smooth refinement and durability. The Tripper navigation pod (via smartphone pairing) and USB charging make it a perfect companion for highway rides.</p>
              <p>Its stylish design, chrome accents, and cruiser stance make it a top pick for riders who want a relaxed, feature-rich Royal Enfield with reliable cruising capability.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 5,60,000 – 6,00,000.</p>`
  },
  {
    name: "Royal Enfield Interceptor 650",
    image: "./assets/rf/bike4.png",
    specs: [
      "Engine: 648 cc, parallel-twin, air-oil cooled",
      "Power: 47 PS @ 7150 rpm",
      "Torque: 52 Nm @ 5250 rpm",
      "Transmission: 6-speed with slipper clutch",
      "Suspension: 41 mm front forks, Twin coil-over shocks (rear)",
      "Brakes: 320 mm Disc (Front), 240 mm Disc (Rear)",
      "ABS: Dual-channel Bosch ABS",
      "Lighting: Halogen with LED tail lamp",
      "Console: Analog-digital with gear position and trip meter",
      "Top Speed: ~170 km/h",
      "Fuel Tank: 13.7 litres",
      "Weight: 202 kg"
    ],
    details: `<p>The <strong>Interceptor 650</strong> is a retro roadster that brings together Royal Enfield’s legacy with modern engineering. Powered by a smooth and punchy parallel-twin engine, it’s ideal for highway touring, spirited riding, and even café racer custom builds.</p>
              <p>The riding posture is upright with mid-set foot pegs, making it comfortable for long journeys. Its refined performance, solid chassis, and classic design have earned it praise globally.</p>
              <p>The Interceptor offers exceptional value in the twin-cylinder segment, making it perfect for experienced riders looking for an affordable yet premium-feeling motorcycle.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 9,50,000 – 10,20,000.</p>`
  },
  {
    name: "Royal Enfield Himalayan 450",
    image: "./assets/rf/bike5.png",
    specs: [
      "Engine: 452 cc, liquid-cooled, DOHC, single-cylinder",
      "Power: 40.02 PS @ 8000 rpm",
      "Torque: 40 Nm @ 5500 rpm",
      "Transmission: 6-speed with assist and slipper clutch",
      "Suspension: 43 mm USD forks (front), Link-type Monoshock (rear)",
      "Brakes: 320 mm Disc (Front), 270 mm Disc (Rear)",
      "ABS: Dual-channel (rear switchable for off-road)",
      "Lighting: Full LED headlamp with DRLs",
      "Console: 4-inch color TFT display with Bluetooth and Google Maps navigation",
      "Top Speed: ~160 km/h",
      "Fuel Tank: 17 litres",
      "Weight: 196 kg"
    ],
    details: `<p>The <strong>Royal Enfield Himalayan 450</strong> is a next-gen adventure touring motorcycle built for the toughest terrains. It marks a major leap from the earlier Himalayan 411 with a completely new liquid-cooled engine and modern electronics.</p>
              <p>It offers ride-by-wire throttle, multiple riding modes, a full-color TFT dash with real-time navigation, and switchable ABS for trail riding. The long-travel suspension, 21-inch front wheel, and tough chassis make it extremely capable off-road.</p>
              <p>Designed for true explorers, the Himalayan 450 is perfect for cross-country adventures, Himalayan expeditions, or even daily riding with style and purpose.</p>
              <p><strong>Price in Nepal:</strong> Approx. NPR 8,90,000 – 9,50,000.</p>`
  },




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







 