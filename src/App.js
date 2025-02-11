import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

function App() {
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArticleList onSelectArticle={setSelectedArticle} />
        </Route>
        <Route path="/article">
          {selectedArticle ? (
            <ArticleDetail article={selectedArticle} />
          ) : (
            <div>Article not selected.</div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;