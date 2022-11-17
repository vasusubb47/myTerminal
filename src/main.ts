import './style.css';

import cmd, { cmdType, alias, aliasType } from "./cmd";

const asciiArt1 = 
" __      __                _____       <br>"+
" \\ \\    / /               / ____|    <br>"+
"  \\ \\  / /_ _ ___ _   _  | (___      <br>"+
"   \\ \\/ / _` / __| | | |  \\___ \\   <br>"+
"    \\  / (_| \\__ \\ |_| |  ____) |   <br>"+
"     \\/ \\__,_|___/\\__,_| |_____/    <br>";

const asciiArt2 = 
"___    __                         ________     <br>"+
"__ |  / /_____ ___________  __    __  ___/     <br>"+
"__ | / /_  __ `/_  ___/  / / /    _____ \\     <br>"+
"__ |/ / / /_/ /_(__  )/ /_/ /     ____/ /      <br>"+
"_____/  \\__,_/ /____/ \\__,_/      /____/     <br>";


// all the HTML elements reqired for project
const welcome = document.getElementById("welcome");
const cmdArea = document.getElementById("cmdArea") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLParagraphElement;

if (welcome){
  if (Math.floor(Math.random() * 100) > 90) {
    (welcome.childNodes[1] as HTMLParagraphElement).innerHTML = asciiArt2;
  }else {
    (welcome.childNodes[1] as HTMLParagraphElement).innerHTML = asciiArt1;
  }
  console.log(cmd)
}

cmdArea.addEventListener(
  "keypress",
  (ev: KeyboardEvent): any => {
    if (ev.key == "Enter") {
      const value = (ev.target as HTMLTextAreaElement).value.trim();
      (ev.target as HTMLTextAreaElement).value = "";
      if (value.length > 0) {
        runCmd(value);
      }
    }
  }
);

const runCmd = (cmdStr: string) => {
  if (cmdStr in cmd) {
    cmd[cmdStr as keyof cmdType].call();
  }else if (cmdStr in alias) {
    cmd[alias[cmdStr as keyof aliasType] as keyof cmdType].call()
  } else {
    output.innerHTML += cmdStr + "<br>";
  }
}
