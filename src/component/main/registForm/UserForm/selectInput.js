function SelectInput(props) {
  return (
    <div className={"input-group" + props.className}>
      <div className="input-label">{props.label}</div>
      <div className="select-container">
        <select required>
          <option value="">請選擇縣市</option>
          <option value="KLU">基隆市</option>
          <option value="TPH">新北市</option>
          <option value="TPE">臺北市</option>
          <option value="TYC">桃園市</option>
          <option value="HSH">新竹縣</option>
          <option value="HSC">新竹市</option>
          <option value="MAC">苗栗市</option>
          <option value="MAL">苗栗縣</option>
          <option value="TXG">臺中市</option>
          <option value="CWH">彰化縣</option>
          <option value="CWS">彰化市</option>
          <option value="NTC">南投市</option>
          <option value="NTO">南投縣</option>
          <option value="YLH">雲林縣</option>
          <option value="CHY">嘉義縣</option>
          <option value="CYI">嘉義市</option>
          <option value="TNN">臺南市</option>
          <option value="KHH">高雄市</option>
          <option value="IUH">屏東縣</option>
          <option value="PTS">屏東市</option>
          <option value="ILN">宜蘭縣</option>
          <option value="ILC">宜蘭市</option>
          <option value="HWA">花蓮縣</option>
          <option value="HWC">花蓮市</option>
          <option value="TTC">臺東市</option>
          <option value="TTT">臺東縣</option>
          <option value="PEH">澎湖縣</option>
          <option value="KMN">金門縣</option>
          <option value="LNN">連江縣</option>
        </select>
      </div>
    </div>
  )
}
export default SelectInput