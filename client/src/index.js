import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './components/App';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4050/graphql/'
});
const client = new ApolloClient({
  cache,
  link
})

const IndexApp = ()=>(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

ReactDOM.render(
<IndexApp />,
document.getElementById('root'));
