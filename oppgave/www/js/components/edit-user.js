import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

render() {
    return html`
    <head>
    <title> Edit user</title>
    </head>
    <body>

    <form onsubmit="javascript: return false;" id="userForm" method="POST">
      <div>
      <label for="email">Email</label>
      <input id="uname" name="uname" type="text" value="${this.user.uname}" required>
      </div>

      <div>
      <label for="firstName">First Name</label>
      <input  id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
      </div>

      <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
      </div>

      <div>
      <label for="oldpwd">Old Password</label>
      <input type="password"  id="oldpwd" name="oldpwd" type="text" value="">
      </div>

      <div>
      <label for="newpwd">New Password</label>
      <input type="password"  id="pwd" name="pwd" type="text" value="">
      </div>
  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" value="Edit User"></input>
</form>
</body>
    `;
  }

  
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
  }

}
customElements.define('edit-user', EditUser);
