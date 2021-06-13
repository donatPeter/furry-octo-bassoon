import React from "react";
import { AppRouter } from "./AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
