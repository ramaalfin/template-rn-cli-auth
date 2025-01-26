import axios from "../index";

export const getSemester = async () => {
  return await axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/mobile/get_semester`
  );
};
