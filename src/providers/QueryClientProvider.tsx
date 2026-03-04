// import { ReactNode, FC } from 'react';
// import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { apiService } from '@/app/services/apiService';

// /**
//  * React Query Provider
//  * Provides query client instance and devtools for the application
//  */

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//       staleTime: 1000 * 60 * 5, // 5 minutes
//       gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
//     },
//     mutations: {
//       retry: 0,
//     },
//   },
// });

// // Set the queryClient in apiService for automatic cache invalidation
// apiService.setQueryClient(queryClient);

// interface QueryClientProviderProps {
//   children: ReactNode;
// }

// export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
//   // Check env variable, default to true in dev mode
//   const enableDevtools = import.meta.env.VITE_ENABLE_REACT_QUERY_DEVTOOLS === 'true'
//     || (import.meta.env.DEV && import.meta.env.VITE_ENABLE_REACT_QUERY_DEVTOOLS !== 'false');

//   return (
//     <TanstackQueryClientProvider client={queryClient}>
//       {children}
//       {enableDevtools && <ReactQueryDevtools initialIsOpen={false} />}
//     </TanstackQueryClientProvider>
//   );
// };
