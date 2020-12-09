import abstractView from "./abstractView.js";
export default class extends abstractView{
  constructor(){
    super();
    this.setTitle("Campingplätze");
  }
  async getHtml(){
    return `
    <div class="tabinhalt" id="tabpage1">
      <h2>Wähle deinen Campingplatz</h2>
      <h2>Länder</h2>
      <p>
        <ul>
          <li>
            Italien
          </li>
          <li>
            Spanien
          </li>
          <li>
            Portugal
          </li>
          <li>
            Frankreich
          </li>
          <li>
            Österreich
          </li>
        </ul>
      </p>
    </div>
    ´
  }
}
