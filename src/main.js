import { setupCounter } from './counter.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class='container'>
   <header><p>Шапка</p></header>
   <main>
    <div class="tasks">
    <div class="task">
    <div class="task__text">Задание</div>
    <div class="task__status">Статус</div>
    </div>
    <div class="task">
    <div class="task__text"><a href="/">Text</a></div>
    <div class="task__status">X</div>
    </div>
    <div class="task"><div class="task__text"><a href="/">Text</a></div>
    <div class="task__status">X</div></div>
    <div class="task"><div class="task__text"><a href="/">Text</a></div>
    <div class="task__status">X</div></div>
    <div class="task"><div class="task__text"><a href="/">Text</a></div>
    <div class="task__status">X</div></div>
    <div class="task"><div class="task__text"><a href="/">Text</a></div>
    <div class="task__status">X</div></div>
    </div>
   </main>
  </div>
`

setupCounter(document.querySelector('#counter'))
