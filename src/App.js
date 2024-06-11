import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Admin from './pages/Admin'//hali qilinmadi
import Categories from './pages/Categories'
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className='site-layout-content'>
            <Switch>
              <Route path='/admin' Component={Admin} />
              <Route path='/categories' Component={Categories} />
            </Switch>
          </div>
        </Content>
<footer style={{textAlign:"center"}}>Admin panel ©2024 Created by Ulugbek511</footer>

      </Layout>
   </Router>
  );
}

export default App;
