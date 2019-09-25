import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "./components"
import Tone from "tone"

// let songs = ''

// const song = new Tone.Buffer('https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3',()=>{
//   alert('song loaded')
// })

// let player=''

// Tone.Buffer.on('load',()=>{
//   player.push(new Tone.Player('https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3').toMaster())

// })

// console.log(player)

// console.log(songs)





function App() {
  
  
  const [playing, setPlaying] = useState(false)

  var instruments = 'https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3'

  var buffer = new Tone.Buffer(instruments, ()=> {
    var buff = buffer.get()
    var player= new Tone.Player(buff,{
      loop: false
    }).toMaster()
 console.log(player)
    if(!playing){
    player.stop()
     console.log(`[Player.state]${player.state}`)
    }else if(playing && player.state === 'stopped'){
     player.start()
 
     console.log(`[Player.state]${player.state}`)
     
    }
   
  })

// waits for instrument sound files to load from /samples/

 
console.log(playing)
  return (
    <div className="App">
      <header className="App-header">
        <Button playing={playing} setPlaying={setPlaying}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
