
const output = document.getElementById("output") as HTMLParagraphElement;

type cmdCallFun = () => {};

type cmdObject = {
  description: string,
  call: cmdCallFun
}

export type cmdType = {
  clear: cmdObject,
  help: cmdObject,
  whoAmI: cmdObject
}

export type aliasType = {
  cls: keyof cmdType,
  "?": keyof cmdType
};

export const alias = {
  cls: "clear",
  "?": "help"
} as aliasType;

const cmd = {
  clear: {
    description: "clear the screen",
    call: () => {
      output.innerHTML = "";
    }
  },
  help: {
    description: "print all the available commands",
    call: () => {
      let help = "<br>";
      for (const key in cmd) {
        help += key + ": " + cmd[key as keyof cmdType].description + "<br>";
      }
      console.log(help);
      output.innerHTML += help;
    }
  },
  whoAmI: {
    description: "who are you??",
    call: () => {
      output.innerHTML += "<br>Vasu<br>"
    }
  }
} as cmdType;

export default cmd;
