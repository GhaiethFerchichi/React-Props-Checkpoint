import "./App.css";
import Profile from "./profile/Profile";

import img from "./img/avatar.jpg";

function App() {
  const myObj = {
    fullName: "Ferchichi Ghaieth",
    bio:
      "This is my bio skjdfbdsjbfjdfbfbsdjkfbjksdbf sqdhiqshdk hqskdhqs d qskdkqj dhqskjhdkjhdkjhqskd qsdqhsdkjhqskjdh kdfgfdgdf gbjkbdfjgjfbdjgkb bdfkjbsdkjfbdbf  kjqsfdkjbfdsf lksdnflkdnflkndsf kjdsfbsdkjfbdsbfkjbsdfb nlkdsnfdnf nlksdfnklsdnf klnlkdsfnsdf dfkjb",
    profession: "Developer"
  };
  const handleName = () => alert("Ghaieth Ferchichi");
  return (
    <div className='App'>
      <Profile {...myObj} handleName={handleName}>
        <img src={img} style={{ width: "250px" }} alt='Avatar' />
      </Profile>
    </div>
  );
}

export default App;
