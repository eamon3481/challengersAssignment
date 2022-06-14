import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import Navigate from './navigation/Navigate';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigate />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
