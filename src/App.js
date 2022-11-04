import './App.css';
import ProfilePhoto from './/Component/Profile/ProfilePhoto.js'
import FullName from './/Component/Profile/FullName.js'
import Address from './/Component/Profile/Address.js'

function App() {
  return (
    <div className="App">
      <div className="MyProfile">
      <ProfilePhoto/>
      <div>
      <FullName />
      <br />
      <Address />
      </div>
      </div>
    </div>
  );
}

export default App;
