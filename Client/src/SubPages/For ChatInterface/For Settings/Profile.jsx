import USER_STORE from "../../../Stores/User.store";

const Profile = () => {
  const user = USER_STORE((state) => state.user);

  return (
    <section id="Profile">
      <div className="w-1/2 mx-auto mt-10 rounded-3xl border h-1/2 flex flex-col items-center justify-center gap-6">
        <img
          src={user.profilePic === "" ? "/Images/Default.png" : user.profilePic}
          width={80}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div>
            <input
              className="w-full border bg-gray-800 px-8 rounded-3xl py-2"
              placeholder={user.username}
            />
          </div>
          <div>
            <input
              className="w-full border bg-gray-800 px-8 rounded-3xl py-2"
              placeholder={user.email}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
