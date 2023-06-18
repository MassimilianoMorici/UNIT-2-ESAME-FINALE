
// Esame UNIT2 D7 Morici Massimiliano



//// MODIFICA QUESTO CAMPO DI TESTO CON LA MANSIONE LAVORATIVA
const campoRicercaTitolo = { value: "Marketing Intern" }; 

//// MODIFICA QUESTO CAMPO DI TESTO CON IL LUOGO DELL'ATTIVITà LAVORATIVA
const campoRicercaPosizione = { value: "us" };

const jobs = [

  { title: "Marketing Intern", 
    location: "US, NY, New York" },

  { title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland", },
  
  { title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever", },
  
  { title: "Account Executive - Washington DC",
    location: "US, DC, Washington", },

  { title: "Bill Review Manager", 
    location: "US, FL, Fort Worth" },
  
  { title: "Accounting Clerk", 
    location: "US, MD," },

  { title: "Head of Content (m/f)", 
    location: "DE, BE, Berlin" },

  { title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco", },

  { title: "HP BSM SME", 
    location: "US, FL, Pensacola" },

  { title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix", },

  { title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City", },
  
  { title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London", },
  
  { title: "Applications Developer, Digital",
    location: "US, CT, Stamford", },

  { title: "Installers", 
    location: "US, FL, Orlando" },

  { title: "Account Executive - Sydney", 
    location: "AU, NSW, Sydney" },

  { title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore", },

  { title: "Hands-On QA Leader", 
    location: "IL, Tel Aviv, Israel" },

  { title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea", },

  { title: "Visual Designer", 
    location: "US, NY, New York" },

  { title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast", },

  { title: "Marketing Assistant", 
    location: "US, TX, Austin" },

  { title: "Front End Developer", 
    location: "NZ, N, Auckland" },

  { title: "Engagement Manager", 
    location: "AE," },

  { title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad", },

  { title: "Customer Service", 
    location: "GB, LND, London" },

  { title: "H1B SPONSOR FOR L1/L2/OPT", 
    location: "US, NY, New York" },

  { title: "Marketing Exec", 
    location: "SG," },

  { title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi", },

  { title: "Talent Management Process Manager",
    location: "US, MO, St. Louis", },

  { title: "Customer Service Associate", 
    location: "CA, ON, Toronto" },

  { title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham", },

  { title: "Software Applications Specialist", 
    location: "US, KS," },

  { title: "Craftsman Associate", 
    location: "US, WA, Everett" },

  { title: "Completion Engineer", 
    location: "US, CA, San Ramon" },

  { title: "I Want To Work At Karmarama", 
    location: "GB, LND," },

  { title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure", },
]



function effettuaRicerca() {
  const termineRicercaTitolo = campoRicercaTitolo.value.toLowerCase();
  const termineRicercaPosizione = campoRicercaPosizione.value.toLowerCase();

  const risultati = jobs.filter(function (elemento) {
    const titoloMinuscolo = elemento.title.toLowerCase();
    const posizioneMinuscola = elemento.location.toLowerCase();
    return (
      titoloMinuscolo.includes(termineRicercaTitolo) &&
      posizioneMinuscola.includes(termineRicercaPosizione)
    );
  });

  const result = risultati; // Modifica la variabile "result" con i risultati della ricerca
  const count = risultati.length; // Modifica la variabile "count" con la lunghezza dell'array "risultati"

  console.log("Numero di risultati trovati:", count);
  console.log("Risultati della ricerca:", result);
  
}

effettuaRicerca();




// In quanto l'esame è separato in D7 e D8 ho ritenuto più corretto creare 2 compiti da consegnare, il D7 che come richiesto si limitasse a creare l'algoritmo e verificarlo in console log modificando
// il valore di 2 variabili e il D8 che consiste di creare un pagina dove applicare l'algoritmo precedentemente creato tramite degli input di testo. Grazie e buon lavoro. Morici Massimiliano