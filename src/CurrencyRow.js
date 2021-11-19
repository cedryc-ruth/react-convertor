
export default function CurrencyRow() {
  return (
    <>
      <div>
        <input type="number" className="input" />
        <select>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
        </select>
      </div>
    </>
  );
}
