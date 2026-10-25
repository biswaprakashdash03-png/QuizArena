export const quizData = {
  Programming: {
    Easy: [
      {
        question: "Which language is primarily used to add interactivity to web pages?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        answer: "JavaScript",
        explanation: "JavaScript adds dynamic behavior and interactivity to web pages.",
      },
      {
        question: "Which HTML tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
        explanation: "The anchor tag <a> creates hyperlinks in HTML.",
      },
      {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: "const",
        explanation: "The const keyword declares a block-scoped binding that cannot be reassigned.",
      },
      {
        question: "Which symbol is commonly used for a single-line comment in JavaScript?",
        options: ["<!-- -->", "#", "//", "**"],
        answer: "//",
        explanation: "JavaScript uses // for single-line comments.",
      },
      {
        question: "What does CSS primarily control?",
        options: ["Database storage", "Page styling", "Server routing", "File compilation"],
        answer: "Page styling",
        explanation: "CSS controls the appearance and layout of web pages.",
      },
    ],
    Medium: [
      {
        question: "Which array method creates a new array by transforming each element?",
        options: ["filter()", "map()", "find()", "push()"],
        answer: "map()",
        explanation: "map() returns a new array containing the results of its callback.",
      },
      {
        question: "What does JSON stand for?",
        options: [
          "Java Standard Object Notation",
          "JavaScript Object Notation",
          "Java Source Open Network",
          "Joined Script Object Names",
        ],
        answer: "JavaScript Object Notation",
        explanation: "JSON stands for JavaScript Object Notation.",
      },
      {
        question: "Which HTTP method is commonly used to retrieve a resource?",
        options: ["POST", "PATCH", "GET", "DELETE"],
        answer: "GET",
        explanation: "GET is used to request a representation of a resource.",
      },
      {
        question: "What does === check in JavaScript?",
        options: [
          "Only value equality",
          "Value and type equality",
          "Only type equality",
          "Whether two variables are arrays",
        ],
        answer: "Value and type equality",
        explanation: "Strict equality compares values without performing type coercion.",
      },
      {
        question: "Which structure follows the FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
        explanation: "A queue processes items in first-in, first-out order.",
      },
    ],
    Hard: [
      {
        question: "What does Big O notation describe in algorithm analysis?",
        options: [
          "The exact runtime in seconds",
          "The growth of resource usage as input scales",
          "The number of source-code files",
          "The programming language version",
        ],
        answer: "The growth of resource usage as input scales",
        explanation: "Big O describes an asymptotic upper bound on growth, commonly for time or space complexity.",
      },
      {
        question: "Which JavaScript feature lets an inner function access variables from its outer lexical scope?",
        options: ["Hoisting alone", "Closure", "Type casting", "Destructuring"],
        answer: "Closure",
        explanation: "A closure retains access to its surrounding lexical environment.",
      },
      {
        question: "Which HTTP status code usually indicates that a request succeeded and returned a resource?",
        options: ["201", "301", "404", "500"],
        answer: "201",
        explanation: "201 Created indicates that a request succeeded and created a resource.",
      },
      {
        question: "What is the average lookup time for a key in a well-distributed hash table?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: "O(1)",
        explanation: "Hash-table lookup is O(1) on average, though worst-case performance can be O(n).",
      },
      {
        question: "Which React hook is commonly used to manage local component state?",
        options: ["useState", "useRoute", "useStyle", "useMarkup"],
        answer: "useState",
        explanation: "useState adds state to a function component.",
      },
    ],
  },

  Science: {
    Easy: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars",
        explanation: "Iron-rich dust gives Mars its characteristic reddish appearance.",
      },
      {
        question: "What is the chemical formula for water?",
        options: ["CO₂", "O₂", "H₂O", "NaCl"],
        answer: "H₂O",
        explanation: "A water molecule contains two hydrogen atoms and one oxygen atom.",
      },
      {
        question: "Which organ pumps blood around the human body?",
        options: ["Lungs", "Brain", "Kidneys", "Heart"],
        answer: "Heart",
        explanation: "The heart pumps blood through the circulatory system.",
      },
      {
        question: "Which star is closest to Earth?",
        options: ["Sirius", "Polaris", "The Sun", "Proxima Centauri"],
        answer: "The Sun",
        explanation: "The Sun is Earth's nearest star.",
      },
      {
        question: "What force pulls objects toward Earth?",
        options: ["Friction", "Gravity", "Magnetism", "Electricity"],
        answer: "Gravity",
        explanation: "Gravity attracts objects with mass toward one another.",
      },
    ],
    Medium: [
      {
        question: "What is the approximate speed of light in a vacuum?",
        options: ["30,000 km/s", "150,000 km/s", "300,000 km/s", "3,000 km/s"],
        answer: "300,000 km/s",
        explanation: "Light travels at approximately 299,792 kilometres per second in a vacuum.",
      },
      {
        question: "Which part of a cell contains most of its genetic material?",
        options: ["Ribosome", "Nucleus", "Cell membrane", "Golgi apparatus"],
        answer: "Nucleus",
        explanation: "In eukaryotic cells, most DNA is housed in the nucleus.",
      },
      {
        question: "What is the pH of a neutral aqueous solution at 25°C?",
        options: ["0", "5", "7", "14"],
        answer: "7",
        explanation: "At 25°C, a neutral aqueous solution has a pH of 7.",
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide",
        explanation: "Plants use carbon dioxide, water and light energy to produce sugars.",
      },
      {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Watt", "Ohm", "Ampere"],
        answer: "Ampere",
        explanation: "The ampere is the SI base unit of electric current.",
      },
    ],
    Hard: [
      {
        question: "Which particles are found in an atomic nucleus?",
        options: [
          "Only electrons",
          "Protons and neutrons",
          "Electrons and photons",
          "Only neutrons",
        ],
        answer: "Protons and neutrons",
        explanation: "Atomic nuclei contain protons and, in most atoms, neutrons.",
      },
      {
        question: "Which law states that energy cannot be created or destroyed in an isolated system?",
        options: [
          "Newton's first law",
          "Conservation of energy",
          "Ohm's law",
          "Boyle's law",
        ],
        answer: "Conservation of energy",
        explanation: "Energy is conserved in an isolated system.",
      },
      {
        question: "What is the main function of red blood cells?",
        options: [
          "Produce digestive enzymes",
          "Transport oxygen",
          "Filter urine",
          "Transmit nerve signals",
        ],
        answer: "Transport oxygen",
        explanation: "Haemoglobin in red blood cells binds and transports oxygen.",
      },
      {
        question: "Which type of electromagnetic radiation has the shortest wavelength?",
        options: ["Radio waves", "Microwaves", "Visible light", "Gamma rays"],
        answer: "Gamma rays",
        explanation: "Gamma rays occupy the shortest-wavelength end of the electromagnetic spectrum.",
      },
      {
        question: "What is the approximate value of Avogadro's constant?",
        options: [
          "6.022 × 10²³ mol⁻¹",
          "3.14 × 10⁸ mol⁻¹",
          "9.81 × 10² mol⁻¹",
          "1.602 × 10⁻¹⁹ mol⁻¹",
        ],
        answer: "6.022 × 10²³ mol⁻¹",
        explanation: "Avogadro's constant is approximately 6.022 × 10²³ entities per mole.",
      },
    ],
  },

  "General Knowledge": {
    Easy: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi",
        explanation: "New Delhi is the capital of India.",
      },
      {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
        explanation: "The Pacific Ocean is the largest ocean on Earth.",
      },
      {
        question: "How many days are there in a leap year?",
        options: ["364", "365", "366", "367"],
        answer: "366",
        explanation: "A leap year has 366 days.",
      },
      {
        question: "Which currency is used in Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        answer: "Yen",
        explanation: "The yen is Japan's official currency.",
      },
      {
        question: "Which is the national animal of India?",
        options: ["Lion", "Bengal tiger", "Elephant", "Leopard"],
        answer: "Bengal tiger",
        explanation: "The Bengal tiger is India's national animal.",
      },
    ],
    Medium: [
      {
        question: "Which Indian state is known as the Land of the Rising Sun in India?",
        options: ["Assam", "Arunachal Pradesh", "Odisha", "Kerala"],
        answer: "Arunachal Pradesh",
        explanation: "Arunachal Pradesh is India's easternmost state and is associated with the rising sun.",
      },
      {
        question: "Which organisation publishes the Human Development Report?",
        options: ["UNDP", "WHO", "WTO", "UNESCO"],
        answer: "UNDP",
        explanation: "The United Nations Development Programme publishes the Human Development Report.",
      },
      {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        answer: "Australia",
        explanation: "Australia is generally considered the smallest continent by land area.",
      },
      {
        question: "Which Indian city is known as the Pink City?",
        options: ["Jaipur", "Jodhpur", "Udaipur", "Bhopal"],
        answer: "Jaipur",
        explanation: "Jaipur in Rajasthan is widely known as the Pink City.",
      },
      {
        question: "How many players from one team are on the field in a standard football match?",
        options: ["9", "10", "11", "12"],
        answer: "11",
        explanation: "Each team normally fields 11 players, including the goalkeeper.",
      },
    ],
    Hard: [
      {
        question: "Which treaty formally established the European Union?",
        options: [
          "Treaty of Versailles",
          "Maastricht Treaty",
          "Treaty of Utrecht",
          "Treaty of Paris of 1763",
        ],
        answer: "Maastricht Treaty",
        explanation: "The Maastricht Treaty, signed in 1992, established the European Union.",
      },
      {
        question: "Which is the largest desert on Earth by total area?",
        options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
        answer: "Antarctic Desert",
        explanation: "Antarctica is a polar desert and the largest desert by area.",
      },
      {
        question: "Which Indian mathematician is associated with the Hardy–Ramanujan number 1729?",
        options: [
          "Aryabhata",
          "Srinivasa Ramanujan",
          "Brahmagupta",
          "Bhaskara II",
        ],
        answer: "Srinivasa Ramanujan",
        explanation: "1729 is famously associated with Srinivasa Ramanujan and G. H. Hardy.",
      },
      {
        question: "Which strait separates Asia from North America?",
        options: ["Strait of Hormuz", "Bering Strait", "Strait of Malacca", "Gibraltar Strait"],
        answer: "Bering Strait",
        explanation: "The Bering Strait separates Russia and Alaska.",
      },
      {
        question: "Where is the headquarters of the International Court of Justice?",
        options: ["Geneva", "New York", "The Hague", "Vienna"],
        answer: "The Hague",
        explanation: "The International Court of Justice is based in The Hague, Netherlands.",
      },
    ],
  },
};