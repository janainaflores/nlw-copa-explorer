function creatGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
 `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
    "21/11",
    "segunda",
    creatGame("senegal", "13:00", "netherlands")) +
  createCard(
    "23/11",
    "quarta",
    creatGame("croatia", "07:00", "marocco") +
    creatGame("germany", "10:00", "japan")) +
    createCard(
    "24/11",
    "quinta",
    creatGame("portugal", "13:00", "ghana") +
    creatGame("brazil", "16:00", "serbia")) +
    createCard(
      "25/11", 
      "sexta", 
      creatGame("senegal", "10:00", "qatar")) +
    createCard(
      "27/11",
      "domingo",
      creatGame("japan", "07:00", "costarica") +
      creatGame("croatia", "13:00", "canada")) +
    createCard(
      "28/11",
      "segunda",
      creatGame("brazil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay")) +
    createCard(
      "29/11", 
      "terça", 
      creatGame("senegal", "12:00", "ecuador")) +
    createCard(
      "01/12",
      "quinta",
      creatGame("croatia", "12:00", "belgium") +
      creatGame("japan", "16:00", "spain")) +
    createCard(
      "02/12",
      "sexta",
      creatGame("portugal", "12:00", "southkorea") +
      creatGame("brazil", "16:00", "cameroon")
    )