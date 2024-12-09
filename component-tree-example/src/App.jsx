import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    // Състояние за активната категория
    this.state = {
      activeCategory: 'category1', // Начална категория
      posts: [
        { id: 1, title: "React Basics", description: "Въведение в React компоненти." },
        { id: 2, title: "Component Tree", description: "Как компонентите създават дървовидна структура." },
        { id: 3, title: "Props and State", description: "Предаване на данни надолу по дървото." }
      ]
    };
  }

  // Функция за промяна на активната категория
  handleCategoryChange = (category) => {
    this.setState({ activeCategory: category });
  };

  render() {
    return (
      <div className="App">
        <Header onCategoryChange={this.handleCategoryChange} />
        <Main posts={this.state.posts} activeCategory={this.state.activeCategory} />
        <Footer />
      </div>
    );
  }
}

export default App;
