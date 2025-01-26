import axios from "../index";

interface ChangePassword {
  id_siswa: number;
  old_pass: string;
  new_pass: string;
}

export const changePassword = async (data: ChangePassword) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/change_password`,
    data
  );
};
