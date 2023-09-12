import profilePhoto from "../../assets/images/profile.png"
const Header = () => {
  return (
    <div className="flex lg:max-w-[80vw] items-center mx-auto justify-between py-12">
      <p className="font-bold text-4xl"> Knowledge Cafe</p>
      <img src={profilePhoto} alt="" />
    </div>
  );
};

export default Header;
