import './style.css';
import Datetime from './util';
setInterval(()=>{
    const t = Datetime.getCurrentTime();
    document.getElementById('hr').innerText = t.hr;
    document.getElementById('min').innerText = t.min;
    document.getElementById('sec').innerText = t.sec;
},1000);