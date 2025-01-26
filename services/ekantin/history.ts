import axios from "../index";

export const getHistoryDetail = async (
  id_jns: number,
  id_user: number,
  tanggal: string
) => {
  const data = {
    id_jns: id_jns,
    id_user: id_user,
    tanggal: tanggal,
  };

  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/ekantin/history_dtl`,
    data
  );
};
