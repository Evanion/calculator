import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from './Components/Box';
import { theme } from './Styles/Theme';
import { Calculator } from './Screens/Calculator/Calculator';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
    </ThemeProvider>
  );
};

export default App;
