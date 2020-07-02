import React from 'react';
import * as API from '../shared/http';
import Link from '../components/link/Link';
import Header from '../components/Header/Header';
import ErrorMessage from '../components/Error/ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getLinks();
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.error(info);
    this.setState(() => ({ error: error }));
  }

  getLinks() {
    API.fetchLinks()
      .then((result) => {
        this.setState(() => ({ links: this.state.links.concat(result.data) }));
      })
      .catch((error) => {
        this.setState(() => ({ error: error }));
      });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    }
    return (
      <div className="App">
        {/* <h1> Hacker news - App component</h1> */}
        <Header branding="Hacker News" />
        {this.state.links.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

export default App;
