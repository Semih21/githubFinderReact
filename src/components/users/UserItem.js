import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  //   const { avatar_url, login, html_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          more
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
