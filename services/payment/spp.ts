import axios from "../index";

interface SppProps {
  id_siswa: number;
}

interface SubmitBankProps {
  id_spp: number;
  bank_code: string;
}

interface SubmitTopupProps {
  id_siswa: number;
  amount: number;
  bank_code: string;
}

interface SubmitBankMergeProps {
  id_spp: string;
  bank_code: string;
}

interface KonfirmasiPembayaranSPP {
  id_siswa: number;
  id_spp: number;
  file: string;
}

interface KonfirmasiTopup {
  id_siswa: number;
  id_topup: number;
  file: string;
}

export const getSPP = async (data: SppProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/ewallet/list_spp`,
    data
  );
};

export const getHistorySPP = async (data: SppProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/ewallet/list_spp_hist`,
    data
  );
};

export const submitBank = async (data: SubmitBankProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/submit_spp`,
    data
  );
};

export const submitBankMerge = async (data: SubmitBankMergeProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/submit_spp_merge`,
    data
  );
};

export const lihatKuitansi = async (idSPP: number) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/ewallet/kuitansi_spp_base64`,
    { id_spp: idSPP }
  );
};

export const konfirmasiPembayaran = async (data: KonfirmasiPembayaranSPP) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/konfirmasi_spp`,
    data
  );
};

export const getTopupHistory = async (idSiswa: number) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/ewallet/list_topup`,
    { id_siswa: idSiswa }
  );
};

export const submitTopup = async (data: SubmitTopupProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/submit`,
    data
  );
};

export const konfirmasiTopup = async (data: KonfirmasiTopup) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/konfirmasi_topup`,
    data
  );
};

export const batalTopup = async (idTopup: number) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/cancel_topup`,
    { id_topup: idTopup }
  );
};
