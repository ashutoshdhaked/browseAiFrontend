import { useState } from 'react';
import './App.css';
import HtmlScriping from './htmlscriping';
import Page from './page';
import ProductList from './productList';
import MonitoStock from './monitorstock';

function App() {
  const [visibleComponent, setVisibleComponent] = useState(null);

  return (
    <div className="App">
      <h1>Web scraping</h1>
      <div>
        <button onClick={() => setVisibleComponent('ProductList')}>Show Product List</button>
        <button onClick={() => setVisibleComponent('Page')}>Show Image</button>
        <button onClick={() => setVisibleComponent('HtmlScriping')}>Show Html Scriping</button>
        <button onClick={() => setVisibleComponent('MonitorStock')}>MonitorStock</button>
      </div>
      <div>
        {visibleComponent === 'ProductList' && <ProductList />}
        {visibleComponent === 'Page' && <Page />}
        {visibleComponent === 'HtmlScriping' && <HtmlScriping />}
        {visibleComponent === 'MonitorStock' && <MonitoStock/>}
      </div>
    </div>
  );
}

export default App;
