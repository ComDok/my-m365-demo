const advices = [
  "Reinigen Sie Ihre Tastatur regelmäßig, um Keime zu vermeiden.",
  "Vergessen Sie nicht, Ihre Daten regelmäßig zu sichern!",
  "Installieren Sie Updates, um Ihre Systeme sicher zu halten.",
  "Lassen Sie Ihren PC einmal im Jahr vom Fachmann prüfen.",
  "Vermeiden Sie Flüssigkeiten in der Nähe Ihrer Technik.",
  "Ein Laptop-Lüfter sollte regelmäßig entstaubt werden."
];

function showAdvice() {
  const index = Math.floor(Math.random() * advices.length);
  document.getElementById("advice").innerText = advices[index];
}

showAdvice();
