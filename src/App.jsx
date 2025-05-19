import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css'; // 推荐 Ant Design v5 用 reset.css

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Hello, React with Ant Design!</h1>
    <Button type="primary">Primary Button</Button>
  </div>
);

export default App;