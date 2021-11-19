import './App.css';

function App() {
  return (
    <>
      <h1>Convert</h1>
      <div>
        <input type="number" />
        <select>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
        </select>
      </div>
      <div>=</div>
      <div>
        <input type="number" />
        <select>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
        </select>
      </div>
    </>
  );
}

export default App;
