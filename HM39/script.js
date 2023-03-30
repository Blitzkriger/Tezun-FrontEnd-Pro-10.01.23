const votes = [
  {emoji: "😀", count: 0},
  {emoji: "😊", count: 0},
  {emoji: "😐", count: 0},
  {emoji: "😕", count: 0},
  {emoji: "😞", count: 0},
];

const container = document.querySelector("#container");
const votesContainer = document.createElement("div");
votesContainer.style.display = "flex";
votesContainer.style.flexDirection = "row";

votes.forEach(function(vote) {

  const voteContainer = document.createElement("div");
  voteContainer.style.display = "flex";
  voteContainer.style.flexDirection = "column";
  voteContainer.style.alignItems = "center";
  voteContainer.style.marginRight = '10px';

  const voteElem = document.createElement("span");
  voteElem.textContent = vote.emoji;
  voteElem.style.cursor = 'pointer';
  voteElem.style.userSelect = "none";
  voteElem.addEventListener("click",function() {
    vote.count++;
    countElem.textContent = vote.count;
  });

  const countElem = document.createElement("span");
  countElem.textContent = vote.count;

  voteContainer.appendChild(voteElem);
  voteContainer.appendChild(countElem);
  votesContainer.appendChild(voteContainer);
});

container.appendChild(votesContainer);

