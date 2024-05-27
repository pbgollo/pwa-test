function fetchLeaderboard() {
  fetch('assets/leaderboard.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.trim().split('\n');
      const leaderboardList = document.getElementById('leaderboard');

      lines.forEach(line => {
        const listItem = document.createElement('li');
        listItem.textContent = line;
        leaderboardList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erro ao obter o arquivo:', error));
}


window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  console.log('navigator:', navigator);

  // Chamar a função para iniciar a requisição
  fetchLeaderboard();

}

