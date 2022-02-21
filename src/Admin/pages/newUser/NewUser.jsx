import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './newUser.css';

export default function NewUser() {
  return (
    <>
      <Topbar />
      <div className="d-flex mt-3">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input placeholder="john" type="text" />
            </div>
            <div className="newUserItem">
              <label>Full Name</label>
              <input placeholder="John Smith" type="text" />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input placeholder="john@gmail.com" type="email" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input placeholder="password" type="password" />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input placeholder="+1 123 456 78" type="text" />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input placeholder="New York | USA" type="text" />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input id="male" name="gender" type="radio" value="male" />
                <label htmlFor="male">Male</label>
                <input id="female" name="gender" type="radio" value="female" />
                <label htmlFor="female">Female</label>
                <input id="other" name="gender" type="radio" value="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" id="active" name="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newUserButton" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
