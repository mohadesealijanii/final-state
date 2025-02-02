import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({...profileData, constructionDate: date})
  };
  return (
    <div>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={changeHandler}
      />
    </div>
  );
}

export default CustomDatePicker;


//342 should be watched