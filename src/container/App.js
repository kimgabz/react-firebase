import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Links from '../components/link/Links';
import AddLink from '../components/link/AddLink';
import EditLink from '../components/link/EditLink';
import NotFound from '../components/notFound/NotFound';
// import { AppProvider } from '../store/context';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      // <AppProvider>
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header branding="Data News" />
            <Switch>
              <Route exact path="/" component={Links} />
              <Route exact path="/links/submit" component={AddLink} />
              <Route exact path="/links/edit/:id" component={EditLink} />
              <Route exact component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
      // </AppProvider>
    );
  }
}

export default App;
