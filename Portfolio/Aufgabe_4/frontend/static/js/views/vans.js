import abstractView from "./abstractView.js";
export default class extends abstractView{
  constructor(){
    super();
    this.setTitle("Vans");
  }
  async getHtml(){
    return `
    <div class="tabinhalt" id="tabpage2">
      <h2>Wähle deinen Van aus</h2>
      <p>
        TO DO: Vans hinzufügen
      </p>
    </div>
    ´
  }
}
