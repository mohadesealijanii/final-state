import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className="pb-6">
      <p className="font-medium">{title}</p>
      <div>
        <div>
          {profileData[type].map((i, index) => (
            <div key={index}>
              <input
                type="text"
                value={i}
                onChange={(e) => changeHandler(e, index)}
                className="border border-slate-400 border-dashed rounded lg:ml-7 sm:ml-1 mb-1"
              />
              <button onClick={() => deleteHandler(index)}>
                <p className="flex font-medium text-red-700">
                  حذف
                  <AiOutlineDelete />
                </p>
              </button>
            </div>
          ))}
          <button onClick={addHandler}>
            <p className="flex text-blue-800 font-medium">
              <MdOutlineLibraryAdd />‌ افزودن ‌
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TextList;
