import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorAndMessages, setUserInfo } from "../../redux/actions/user";
import { removeEntireCart } from "../../redux/actions/cart";
import PersonalDataEditForm from "./components/PersonalDataEditForm/PersonalDataEditForm";
import PasswordChangeForm from "./components/PasswordChangeForm/PasswordChangeForm";
import { removeEntireFav } from "../../redux/actions/favorites";
import UserAvatar from "./components/UserAvatar/UserAvatar";

function UsersCabinet() {
  const dispatch = useDispatch();
  const { firstName, lastName, email } = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    return () => {
      dispatch(clearErrorAndMessages());
    };
  }, []);
  return (
    <section className="users-cabinet">
      <div className="container users-cabinet__content-wrapper">
        <aside className="users-cabinet__info">
          <UserAvatar />
          <p>{`${firstName} ${lastName}`}</p>
          <p>{email}</p>
          <button
            className="users-cabinet__btn logout-btn"
            type="button"
            onClick={() => {
              dispatch(setUserInfo({}));
              dispatch(removeEntireCart());
              dispatch(removeEntireFav());
            }}
          >
            LOG OUT
          </button>
        </aside>
        <PersonalDataEditForm />
        <PasswordChangeForm />
      </div>
    </section>
  );
}

export default UsersCabinet;
