import { ConfigProvider, Layout } from 'antd';
import en from 'antd/lib/locale/en_US';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.less';
import { AppRoute } from './App.models';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BlobDetail from './pages/BlobDetails/BlobDetails'

const locales = { en };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App: FC = () => {
  const routes: AppRoute[] = [
    {
      path: '/blobs/:id',
      component: <BlobDetail />
    },
    {
      path: '/blobs',
      component: <Home />,
    },
  ];

  const createRoute = (route: AppRoute) => {
    return <Route path={route.path} element={route.component} key={route.path} />;
  };

   return (
    <ConfigProvider locale={locales.en}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Header />
          <Content>
            <Routes>
              {routes.map((route) => createRoute(route))}
              <Route path="/" element={<Navigate replace to="/blobs" />} />
            </Routes>
          </Content>
        </Layout>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default App;
