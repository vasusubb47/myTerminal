
const output = document.getElementById("output") as HTMLParagraphElement;
const welcome = document.getElementById("welcome") as HTMLDivElement;

type cmdObject = {
  description: string,
  call: () => {},
  callP: (param: string[]) => {}
}

export type cmdType = {
  clear: cmdObject,
  help: cmdObject,
  about: cmdObject,
  echo: cmdObject,
  projects: cmdObject,
  contactMe: cmdObject,
  src: cmdObject,
}

export const cmdPramReqList: [keyof cmdType] = ["echo"];

const cmd = {
  clear: {
    description: "clear the screen",
    call: () => {
      welcome.classList.add("hidden");
      output.innerHTML = "";
    }
  },
  help: {
    description: "print all the available commands",
    call: () => {
      let help = "<br>";
      for (const key in cmd) {
        help += key + "   : " + cmd[key as keyof cmdType].description + "<br>";
      }
      output.innerHTML += help;
    }
  },
  echo: {
    description: "Prints the given message",
    callP: (msg: string[]) => {
      output.innerHTML += "<br>" + msg + "<br>";
    }
  },
  about: {
    description: "about this project",
    call: () => {
      output.innerHTML += "<br> hello <br>";
    }
  },
  projects: {
    description: "See all my projects",
    call: () => {
      output.innerHTML += "<br> <a href='https://github.com/Vasu7777py' target='_blank'>Projects</a><br>"
    }
  },
  contactMe: {
    description: "My Contacts",
    call: () => {
      output.innerHTML += "<br>" +
        "<a href='mailto:subbannavarvasu@gmail.com' target='_blank'>Email</a><br>"+
        "<a href='tel:+917899927254' target='_blank'>Call ME</a><br>"+
        "<a href='https://www.linkedin.com/in/vasu-subbannavar-3a33791b1/' target='_blank'>LinkedIn</a><br>"+
        "<a href='https://twitter.com/Vasu_7777' target='_blank'>Twitter</a><br>"+
        "<a href='https://github.com/Vasu7777py/' target='_blank'>Git Hub</a><br>";
    }
  },
  src: {
    description: "To see the sorce code of the terminal App",
    call: () => {
      output.innerHTML += "<br> <a href='https://github.com/Vasu7777py/myTerminal' target='_blank'>Terminal code</a>";
    }
  }
} as cmdType;

export default cmd;
