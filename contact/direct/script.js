document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const messageInput = document.querySelector("#body");
  
    messageInput.addEventListener("input", function () {
      const lineCount = messageInput.value.split("\n").length;
      const maxRows = 10;
      const minRows = 4;
      const numRows = Math.min(Math.max(minRows, lineCount), maxRows);
      messageInput.rows = numRows;
    });
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const nameInput = document.querySelector("#name");
      const subjectInput = document.querySelector("#subject");
      const message = messageInput.value;
  
      const name = nameInput.value;
      const subject = subjectInput.value;
  
      const webhookURL =
        "https://discord.com/api/webhooks/1137944840278130718/mgMhjDeEibU3IziU-ef9LH_sNJH9KUPNV4Al5KzXnJuysbuAfTbiRuRe3C6NIPYeJa8q";
  
      const payload = {
        content: `## Name:\n**${name}**\n\n## Subject:\n${subject}\n\n## Message:\n${message}`,
      };
  
      nameInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
      messageInput.rows = minRows;
  
      try {
        const response = await fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) {
          console.error("Error sending message");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    });
  });