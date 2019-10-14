the whole map has moved to HomePage.js

users.map((user, index) => (
<div key={index}>
<li>
{user.id}: {user.username}{" "}
</li>
<img
src={user.profileImage}
alt="profileImage"
className={`w-25`} ></img>
</div>
))
