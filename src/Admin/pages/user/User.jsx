import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './user.css';

export default function User() {
  return (
    <>
      <Topbar />
      <div className="d-flex mt-3">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/admin/newUser">
              <button className="userAddButton" type="button">
                Create
              </button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  alt=""
                  className="userShowImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Becker</span>
                  <span className="userShowUserTitle">Software Engineer</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">annabeck99</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">New York | USA</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input className="userUpdateInput" placeholder="annabeck99" type="text" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input className="userUpdateInput" placeholder="Anna Becker" type="text" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      className="userUpdateInput"
                      placeholder="annabeck99@gmail.com"
                      type="text"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input className="userUpdateInput" placeholder="+1 123 456 67" type="text" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input className="userUpdateInput" placeholder="New York | USA" type="text" />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      alt=""
                      className="userUpdateImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input id="file" style={{ display: 'none' }} type="file" />
                  </div>
                  <button className="userUpdateButton" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
