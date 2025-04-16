// 入口文件（使用 React 渲染组件）
import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatGirls from './ChatGirls';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatGirls />
  </React.StrictMode>
);