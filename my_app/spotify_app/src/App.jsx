
// import './App.css'
import './spotify.css'
import img1 from './logo.png'
import img2 from './Home.png'
import img3 from './search.png'
import img4 from '/library.png'
import img6 from './Like.png'
import img5 from './cr.png'
import img7 from './yp.png'
import img8 from './ur.png'
import img9 from './ta.png'
import img10 from './a2.png'
import img11 from './a3.png'
import img12 from './a4.png'
import img13 from './a5.png'
import img14 from './image9.png'
import img15 from './image8.png'
import img16 from './image7.png'
import img17 from './image6.png'
import img18 from './i5.png'
import img19 from './image10.png'


function App() {


  return (
    <>
      <div id="spotify">
<div id="sidebar">
<div id="logo"><img src={img1} alt="logo" style={{height:"50px",width:"180px"}} /></div>
<div id='first'>
<div id='home'>
  <div id='homeimg'><img src={img2} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Home</div>
</div>
<div id='search'>
  <div id='homeimg'><img src={img3} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Search</div>
</div>
<div id='library'>
  <div id='homeimg'><img src={img4} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>library</div>
</div>
</div>

<div id='first'>
<div id='cp'>
  <div id='homeimg'><img src={img5} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Create Playlis</div>
</div>
<div id='ls'>
  <div id='homeimg'><img src={img6} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Search</div>
</div>
<div id='ye'>
  <div id='homeimg'><img src={img7} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>library</div>
</div>

<div id='last'>
<div id='lt'><b>FAV</b></div>
<div id='lt'><b>Daily MIx 1</b></div>
<div id='lt'><b>Discover Weekly</b></div>
<div id='lt'><b>Malyalam</b></div>
<div id='lt'><b>Dance/Electronic Mix</b></div>
<div id='lt'><b>EDM/Popular</b></div>
</div>
</div>

</div>

<div id="main bar">
<nav id="mupper">
  <div id='mstart'><img src={img9} alt="" style={{height:"40px",width:"120px"}} /></div>
  <div id='mend'><img src={img8} alt="" style={{height:"40px",width:"140px"}} /></div>
</nav>
<div>
<h2>Good Morning</h2>
</div>
<div id="gmbad">

<div id="box">
<div id="img"><img src={img6} alt="" style={{height:"100px",width:"100px"}}/></div>
<div id="text">Liked Song</div>
</div>

<div id="box">
<div id="img"><img src={img10} alt="" style={{height:"100px",width:"100px"}}/></div>
<div id="text">Liked Song</div>
</div>

<div id="box">
<div id="img"><img src={img11} alt="" style={{height:"100px",width:"100px"}}/></div>
<div id="text">Liked Song</div>
</div>

<div id="box">
<div id="img"><img src={img12} alt="" style={{height:"100px",width:"100px"}}/></div>
<div id="text">Liked Song</div>
</div>

</div>
<div id="box">
<div id="img"><img src={img13} alt="" style={{height:"100px",width:"100px"}}/></div>
<div id="text">Liked Song</div>
</div>
<div id="yml">
<h2>Shows You Might like</h2>
<h3>See All</h3>
</div>

<div id="ml">
 <div id='yobox'><div id='zbox'><img src={img14} alt="" /></div>
 <div id="txt"><b>Weekly Motivation</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img15} alt="" /></div>
 <div id="txt"><b>Meditation Self</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img16} alt="" /></div>
 <div id="txt"><b>Words beyond</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img17} alt="" /></div>
 <div id="txt"><b>The Alexa Show</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img18} alt="" /></div>
 <div id="txt"><b>The stories of</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img19} alt="" /></div>
 <div id="txt"><b>Motivation Daily</b></div></div>
 
</div>
</div>

      </div>
    </>
  )
}

export default App
