/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import cloudinaryConfig from "../../../../config/cloudinaryConfig";
import { updateUser } from "../../../../redux/actions/user";

function UserAvatar() {
  const dispatch = useDispatch();
  const { firstName, lastName, avatarUrl, token } = useSelector((state) => state.user.userInfo);

  async function uploadImage(image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", cloudinaryConfig.presetName);
    data.append("cloud_name", cloudinaryConfig.cloudName);

    fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(updateUser({ avatarUrl: res.url }, token));
      })
      .catch((err) => console.log(err));
  }

  async function deleteImage() {
    dispatch(updateUser({ avatarUrl: "none" }, token));
  }

  return (
    <div className="user-avatar">
      {avatarUrl === "none" ? (
        <Avatar name={`${firstName} ${lastName}`} size="150" round />
      ) : (
        <img className="user-avatar__img" width={150} height={150} src={avatarUrl} alt="user-avatar" />
      )}
      <div className="user-avatar__btns-wrap">
        <label className="input-file">
          <input
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
            type="file"
            name="file"
            accept="image/*"
          />
          <span>Upload</span>
        </label>
        <button onClick={deleteImage} className="user-avatar__del-btn" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserAvatar;
