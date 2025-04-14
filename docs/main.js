const docs = {
  exit: {
    title: "exit",
    content: "Terminates the HOS session. Usage: `exit`"
  },
  ping: {
    title: "ping",
    content: "Sends ICMP packets to a target. Usage: `ping <packets> <packet size> <hostname/IP> <timeout (microseconds)>`"
  },
  netwatch: {
    title: "netwatch",
    content: "Watches a network interface for hosts. Usage: `netwatch <interface> <max hosts>`"
  },
  help: {
    title: "help",
    content: "Displays the help file. Usage: `help`"
  },
  version: {
    title: "version",
    content: "Prints current OS version. Usage: `version`"
  },
  echo: {
    title: "echo",
    content: "Echoes all given arguments to the console. Usage: `echo [text]`"
  },
  setport: {
    title: "setport",
    content: "Sets the active port number. Usage: `setport <port>`"
  },
  clear: {
    title: "clear",
    content: "Clears the screen. Usage: `clear`"
  }
};

function showDoc(cmd) {
  const doc = docs[cmd];
  const content = document.getElementById('docContent');
  content.innerHTML = `<h1>${doc.title}</h1><p>${doc.content}</p>`;
}
