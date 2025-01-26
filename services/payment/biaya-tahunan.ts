import axios from "../index";

interface BiayaTahunanProps {
  id_siswa: number;
}

interface SubmitBankProps {
    id_tahunan: number;
    bank_code: string;
}

export const getBiayaTahunan = async (data: BiayaTahunanProps) => {
    return await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/ewallet/list_tahunan`,
        data
    );
};

export const getHistoryBiayaTahunan = async (data: BiayaTahunanProps) => {
    return await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/ewallet/list_tahunan_hist`,
        data
    );
};

export const submitBank = async (data: SubmitBankProps) => {
    return await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/payment/biaya_tahunan`,
        data
    );
};