const content = document.querySelector(".content"),
 Audio = document.querySelector(".ms"),
 playBtn = content.querySelector("#icon1"),
 nextBtn = content.querySelector("#iconr"),
 prevBtn = content.querySelector("#iconl");
 masterSongName = document.getElementById('masterSongName');

let index=1;

//loading song
function loadData(indexValue){
    Audio.src = "music/"+songs[indexValue - 1].audio+".mp3"; 
}

window.addEventListener("load", ()=>{
    loadData(index);
  });

//pause and play funtions
  function pausesong(){
    content.classList.remove("paused");
    Audio.pause();
    playBtn.src = "play.png";
  }
  function playsong(){
    content.classList.add("paused");
    Audio.play();
    playBtn.src = "pause.png";

  }

  playBtn.addEventListener("click", ()=>{
    const isMusicPaused = content.classList.contains("paused");
    if(isMusicPaused){
      pausesong();
    }
    else{
      playsong();
    }
  });

  //next and prev song fuctions
  nextBtn.addEventListener("click", ()=>{
    nextSong();
    
  });
  
  prevBtn.addEventListener("click", ()=>{
    prevSong();
   
  });
  
  function nextSong(){
    index++;
    if(index > songs.length){
      index = 1;
    }
    else{
      index = index;
    }
    loadData(index);
    masterSongName.innerText = songs[index-1].songName;
    playsong();
  }
  
  function prevSong(){
    index--;
    if(index <= 0){
      index = songs.length;
    }
    else{
      index = index;
    }
    loadData(index);
    masterSongName.innerText = songs[index-1].songName;
    playsong();
  }

  