import abstractView from "./abstractView.js";
export default class extends abstractView{
  constructor(){
    super();
    this.setTitle("Buchungsanfrage");
  }
  async getHtml(){
    return `
    <div class="tabinhalt" id="tabpage3">
      <h2>Jetzt buchen</h2>
      <p>
        Hast du dir deinen Campingplatz ausgesucht? Dann schick uns jetzt eine Buchungsanfrage über das Kontaktformular!
      </p>

      <div id="kontakt">
        <h2>Kontakt</h2>
        <form
        onsubmit = "validateForm(event2)"
        action   = "contact.php"
        method   = "POST"
        >

        <table>

          <tr>
            <td>
              <label for="name">
                Dein Name:
              </label>
            </td>

            <td>
              <input name="vorname" type="text" placeholder="Vorname" required/>
            </td>

            <td>
              <input name="nachname" type="text" placeholder="Nachname" required/>
            </td>
          </tr>

          <tr>
            <td>
              <label for="email">
                E-Mail:
              </label>
            </td>

            <td>
              <input name="email" type="email" placeholder="Deine E-Mail" required/>
            </td>
          </tr>

          <tr>
            <td>
              <label for="campingplatz">
                Campingplatz:
              </label>
            </td>

            <td>
              <select id="laenderlisteid" name="laender">
                <option selected="selected">Bitte auswählen</option>
                <option value="italien">Italien</option>
                <option value="spanien">Spanien</option>
                <option value="portugal">Portugal</option>
                <option value="frankreich">Frankreich</option>
                <option value="oesterreich">Österreich</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label for="nachricht">
                Ihre Nachricht:
              </label>
            </td>

            <td>
              <textarea id="nachrichtid" name="nachricht" placeholder="Deine Nachricht"></textarea>
            </td>

          </tr>
        </table>
        // <!-- Alles zwischen <% und %> ist Javacode -->
        // <!-- <% if (request.getMethod().equals("POST")) { %>
        // <h2>Deine Buchungsanfrage wurde erfolgreich übermittelt. </h2>
        // <b>Name: </b> <%= request.getParameter("vorname") %> <%= request.getParameter("nachname") %>
        // <br/>
        // <b>E-Mail: </b> <%= request.getParameter("email") %>
        // <br/>
        // <b> Angefragter Campingplatz: </b> <%= request.getParameter("laender") %>
        // <b>Deine übermittelte Nachricht: </b><%= request.getParameter("nachricht") %>
        // <% } %> -->
        <input type="submit" class="button" value="Jetzt Buchungsanfrage senden!"/>
      </div>
    </div>
    ´
  }
}
