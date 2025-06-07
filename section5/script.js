const reasons = [
  "You are patient.",
  "You make me feel safe.",
  "You make me feel seen.",
  "You trust me.",
  "You care.",
  "Your voice.",
  "Your eyes.",
  "Your smile.",
  "You understand me.",
  "You are creative.",
  "You motivate me.",
  "You make me feel lucky.",
  "You make me feel at home.",
  "You are determined.",
  "You are trying for us.",
  "You're family-oriented.",
  "You make every day brighter, just by being yourself.",
  "You make the world a better place just by being in it.",
  "Your laughter is my favorite sound.",
  "You always know how to make me feel better.",
  "You always remind me how beautiful I am.",
  "You are the funniest person I know.",
  "You make me smile every day.",
  "You make people laugh without trying.",
  "Your cute dimples.",
  "Your soft heart.",
  "Your gentleness.",
  "Your character.",
  "You bring out the little kid in me.",
  "You never give up.",
  "You love making others happy.",
  "You make the most boring things fun.",
  "You hate to be the same as me.",
  "You can be shy sometimes.",
  "You are good with everyone.",
  "Your singing.",
  "You are my best friend and soulmate.",
  "The way you care for others inspires me every day.",
  "You are unique.",
  "You make me a better person.",
  "You notice the little things.",
  "Your patience.",
  "You love me at my lowest.",
  "You are respectful.",
  "You pray for me.",
  "You always reply quickly.",
  "Your family-oriented.",
  "Your silly handwriting.",
  "You are trying to communicate with me.",
  "You don't make me feel impossible to love.",
  "Your music taste.",
  "How you want a future with me.",
  "You make me fall in love with life.",
  "Your positivity.",
  "You are creative.",
  "You are soft-hearted.",
  "You make me feel worthy of love.",
  "You don't give up on me.",
  "How secure you make me feel.",
  "You make the world better.",
  "Your positivity is contagious.",
  "Your beauty is unmatchable.",
  "How you always love my gifts.",
  "You accept me.",
  "Your jokes.",
  "We have cute inside jokes.",
  "Your clinginess.",
  "Your smile is contagious.",
  "Your honesty.",
  "How smart you are.",
  "Your presence.",
  "You make me feel at home.",
  "How your beauty is unmatchable.",
  "Our connection.",
  "You make me feel seen.",
  "You trust me.",
  "You notice everything.",
  "You never give up on me.",
  "You take care of me.",
  "How you yap to me."
];


let noteId = 0;

function createStickyNotes() {
  const container = document.getElementById("container");
  container.innerHTML = ''; // Clear previous notes if any
  
  for (let i = 0; i < 100; i++) {
    const note = document.createElement("div");
    note.className = "note";
    note.id = "note_" + noteId;
    note.innerHTML = `
      <div class="header">
        <span>Reason #${i + 1}</span>
        <span class="expand" onclick="expandNote('${noteId}')">Click to See</span>
      </div>
      <div class="content" id="content_${noteId}" style="display: none;">
        ${reasons[i % reasons.length]} <!-- Looping through reasons array -->
      </div>
    `;
    container.appendChild(note);
    noteId++;
  }
}

function expandNote(noteId) {
  const content = document.getElementById("content_" + noteId);
  const expandButton = document.querySelector(`#note_${noteId} .expand`);
  
  // Toggle the visibility of the content
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    expandButton.innerText = "Click to Hide";
  } else {
    content.style.display = "none";
    expandButton.innerText = "Click to See";
  }
}

// "Next" Button - Redirect to congratulations.html
function goToCongratulations() {
  window.location.href = "../closepage/index.html"; // Replace with your actual page path
}
