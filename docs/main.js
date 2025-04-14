function showDoc(command) {
  const container = document.getElementById("docContent");
  fetch(`docs/${command}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Doc not found");
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      container.innerHTML = "<p>Documentation not found for this command.</p>";
    });
}
