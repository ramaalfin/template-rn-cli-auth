import axios from "../index";

interface TambahKunjungan {
  id_siswa: number;
  id_jenis_hub_keluarga: string;
  tgl_kunjungan: string;
  keterangan: string;
  is_ortu: number;
  nama: string;
  is_out: number;
  entry_by: number;
  file: string;
}

interface DetailKunjungan {
  id_kunjungan: number;
  tgl_kunjungan: string;
  keterangan: string;
  is_ortu: number;
  nama: string;
  id_jenis_hub_keluarga: number;
  is_out: number;
  entry_by: number;
  file: string;
}

export const getKunjunganBySiswa = async (id_siswa: number) => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/kunjungan/${id_siswa}`
  );

  return response;
};

export const getKunjunganBySiswaByKunjungan = async (
  id_siswa: number,
  id_kunjungan: number
) => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/kunjungan/${id_siswa}/${id_kunjungan}`
  );

  return response;
};

export const getJenisHubunganKeluarga = async () => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/jenis_hub_keluarga`
  );

  return response;
};

export const storeKunjungan = async (data: TambahKunjungan) => {
  const response = await axios.post(
    `${process.env.EXPO_BASE_URL}/mobile/kunjungan`,
    data
  );

  return response;
};

export const updateKunjungan = async (data: DetailKunjungan) => {
  const response = await axios.post(
    `${process.env.EXPO_BASE_URL}/mobile/kunjungan`,
    data
  );

  return response;
};
