import React from 'react';
import 'normalize.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Styles/Theme';
import { Calculator } from './Screens/Calculator/Calculator';
import { BaseStyles } from './Components/BaseStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Calculator />
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
