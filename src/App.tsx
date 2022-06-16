import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';

import Navigate from './navigation/Navigate';
import {store} from './store';
import theme from './themes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigate />
          </SafeAreaProvider>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
