import axios from "axios";

export const setNewPass = async (
  nisn: string,
  tokenForm: string,
  newPassword: string
) => {
  const data = {
    nis: nisn,
    nisn: nisn,
    token: tokenForm,
    new_pass: newPassword,
  };

  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/set_new_password`,
    data
  );
};
