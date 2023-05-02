import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleNavClick(item) {
    switch (item) {
      case 'item1':
        this.setState({ content: 'React — это библиотека для языка программирования JavaScript с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется все остальное.' });
        break;
      case 'item2':
        this.setState({ content: 'Angular — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона, а также упрощение тестирования и разработки.' });
        break;
        case 'item3':
          this.setState({ content: 'Vue — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.' });
          break;
      default:
        this.setState({ content: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Фреймворки и библиотеки</h1>
        </header>
        <div className="App-content">
          <nav className="App-nav">
            <h2>Навигация</h2>
            <ul>
              <li className="App-link" onClick={() => this.handleNavClick('item1')}>React</li>
              <li className="App-link" onClick={() => this.handleNavClick('item2')}>Angular</li>
              <li className="App-link" onClick={() => this.handleNavClick('item3')}>Vue</li>
            </ul>
          </nav>
          <main className="App-main">
            <h2>Описание</h2>
            <p>{this.state.content}</p>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
