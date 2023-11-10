import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, CardLayout, Home, NotFound, RootLayout } from '~/pages';
import { AddCardWidget } from '~/widgets/add-card';
import { lightTheme } from '~/shared/lib';
import 'typeface-roboto';
import 'typeface-nunito';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RootLayout}>
            <Route index Component={Home} />
          </Route>
          <Route path="auth" Component={AuthLayout} />
          <Route path="card" Component={CardLayout}>
            <Route path="new" Component={AddCardWidget} />
            <Route path=":cardId" Component={AddCardWidget} />
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
