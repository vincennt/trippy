import { FaWifi, FaGlassMartiniAlt, FaSmokingBan, FaConciergeBell, FaLanguage, FaGlassCheers } from 'react-icons/fa';
import { MdRestaurantMenu, MdPets, MdOutlineAccessible, MdDryCleaning, MdFreeBreakfast, MdMeetingRoom, MdOutlineAir, MdPool } from 'react-icons/md';
import { GiGymBag } from 'react-icons/gi';



function Icons(props) {

    console.log(this.props);
    return (
        <>
            {props.commodity === "wifi" && <MdRestaurantMenu />}
            {props.commodity === "animals" && <MdPets />}
            {props.commodity === "disable access" && <MdOutlineAccessible />}
            {props.commodity === "dry cleaning" && <MdDryCleaning />}
            {props.commodity === "breakfast included" && <MdFreeBreakfast />}
            {props.commodity === "suites" && <MdMeetingRoom />}
            {props.commodity === "air conditioning" && <MdOutlineAir />}
            {props.commodity === "wifi" && <FaWifi />}
            {props.commodity === "bar" && <FaGlassMartiniAlt />}
            {props.commodity === "concierge" && <FaConciergeBell />}
            {props.commodity === "non smoking" && <FaSmokingBan />}
            {props.commodity === "multilangual staff" && <FaLanguage />}
            {props.commodity === "mini bar" && <FaGlassCheers />}
            {props.commodity === "gym" && <GiGymBag />}
            {props.commodity === "swimming pool" && <MdPool />}
        </>
    );
}

export default Icons;