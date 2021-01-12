import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';

import { createBrowserHistory } from 'history';

import "./App.css";

class App extends Component {
  
}

const appHistory = createBrowserHistory();

function startRouting() {
  document.querySelector('#global-nav').addEventListener("click", e => {
    if (e.target.nodeName === "A") {
      const href = e.target.getAttribute("href");
      appHistory.push(href);
      e.preventDefault();
    }
  });
}

setComponentTemplate(
  createTemplate(
    { startRouting },
    `
    <nav id="global-nav" {{startRouting}}>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/people">People</a></li>
    <li><a href="/planets">Planets</a></li>
    </ul>
    </nav>
    `
  ),
  App
);

export default App;
