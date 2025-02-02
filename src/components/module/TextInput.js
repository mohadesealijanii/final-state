import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
      const { name, value } = e.target;
      setProfileData({ ...profileData, [name]: p2e(value) });
      
  };
  return (
    <div>
      <p className="font-medium pt-4">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          value={profileData[name]}
          name={name}
          onChange={changeHandler}
          className="text-sm p-1 border border-slate-400 border-dashed rounded"
        />
      ) : (
        <input
          type="text"
          value={profileData[name]}
          name={name}
          onChange={changeHandler}
          className=" text-sm p-1 border border-slate-400 border-dashed rounded"
        />
      )}
    </div>
  )
}

export default TextInput;
