import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigate from './navigation/Navigate';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigate />
    </QueryClientProvider>
  );
};

export default App;
