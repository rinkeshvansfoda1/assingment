// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Search_bar from "./Components/Search_bar";
import Content_Filter from './Components/Content_Filter';
import Content from './Components/Content';
import dummydata from './Components/dummydata.json';
import { useState } from 'react';

// import Content from "./Components/Content";

function App() {
  const [data,setData] = useState(dummydata);
  const [dataCopy,setDataCopy] = useState(dummydata);

  return (
    <>
    <Header/>
    <Search_bar/>
    <Content_Filter data={data} setDataCopy={setDataCopy} />
    <Content data={dataCopy}/>
    </>
  );
}

export default App;
