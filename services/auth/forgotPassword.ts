import axios from "axios";

export const forgotPassword = async (nisn: string, tglLahir: string) => {
  const data = {
    nis: nisn,
    nisn: nisn,
    tgl_lahir: tglLahir,
  };

  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/forgot_password`,
    data
  );
};
