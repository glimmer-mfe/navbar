import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


class App extends Component {
  
}


setComponentTemplate(
  createTemplate(
    {  },
    `
    <h1>Glimmer MFE</h1>
    <nav>
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
