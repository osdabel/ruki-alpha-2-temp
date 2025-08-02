'use client';

import { useState, useEffect, useMemo } from 'react';

// daftar soal yang ingin ditampilkan (sesuaikan label-nya)
const QUESTIONS = [
  { key: 'q1', label: 'Apa pendapatmu secara keseluruhan tentang kinerja OSIS saat ini?' },
  { key: 'q2', label: 'Berikan Kritik terhadap Rapat yang biasa dilaksanakan OSIS (Kekurangan)' },
  { key: 'q3', label: 'Sebutkan hal yang menurutmu perlu diperbaiki di OSIS' },
  { key: 'q4', label: 'Soal Apakah kamu merasa sudah ditempatkan pada seksi bidang yang benar?' },
  { key: 'q5', label: 'Bagaimana Pengalaman kamu selama berada disekbid' },
  { key: 'q6', label: 'Bagaimana pandangan kamu terhadap angkatan kelas 12 sekarang?' },
  { key: 'q7', label: 'Bagaimana pandangan kamu terhadap angkatan sebaya kamu (Satu Angkatan)?' },
  { key: 'q8', label: 'Ceritakan momen ketika kamu merasa sangat dihargai atau justru diabaikan sebagai pengurus.' },
  { key: 'q9', label: 'Apa kendala pribadi atau tim yang menghambat kinerja kamu sebagai pengurus?' },
  { key: 'q10', label: 'Apa satu hal terburuk dari kinerja BPH selama periode ini?' },
  { key: 'q11', label: 'Apa satu hal terbaik dari kinerja BPH selama periode ini?' },
  { key: 'q12', label: 'Berikan Kritik Kepada BPH secara keseluruhan' },
  { key: 'q13', label: 'Berikan Saran Kepada BPH secara Keseluruhan' },
  { key: 'q14', label: 'Adakah hal yang ingin kamu sampaikan kepada BPH?' },
  { key: 'q15', label: 'Berikan Kritik terhadap Ketua OSIS (Kang Reza)' },
  { key: 'q16', label: 'Tuliskan Saran atau Pesan terhadap Ketua OSIS (Kang Reza)' },
  { key: 'q17', label: 'Berikan Kritik terhadap Wakil Ketua OSIS (Kang Cep Rezqy)' },
  { key: 'q18', label: 'Tuliskan Saran atau Pesan terhadap Wakil Ketua OSIS (Kang Cep Rezqy)' },
  { key: 'q19', label: 'Berikan Kritik terhadap Sekretaris OSIS (Kang Ruben)' },
  { key: 'q20', label: 'Tuliskan Saran atau Pesan terhadap Sekretaris OSIS (Kang Ruben)' },
  { key: 'q21', label: 'Berikan Kritik terhadap Bendahara OSIS (Teh Kairina)' },
  { key: 'q22', label: 'Tuliskan Saran atau Pesan terhadap Bendahara OSIS (Teh Kairina)' },
  { key: 'q23', label: 'Berikan Kritik terhadap Koordinator Kelas XI OSIS (Teh Nazwa)' },
  { key: 'q24', label: 'Tuliskan Saran atau Pesan terhadap Koordinator Kelas XI OSIS (Teh Nazwa)' },
  { key: 'q25', label: 'Berikan Kritik terhadap Koordinator Kelas X OSIS (Kang Hafizh)' },
  { key: 'q26', label: 'Tuliskan Saran atau Pesan terhadap Koordinator Kelas X OSIS (Kang Hafizh)' },
  { key: 'q27', label: 'Apakah menurut kamu rapat untuk event terlalu mendadak?' },
  { key: 'q28', label: 'Menurut pendapat-mu Idealnya Berapa lama waktu yang dibutuhkan untuk persiapan event?' },
  { key: 'q29', label: 'Menurut mu, bagaimana seharusnya perencanaan event?' },
  { key: 'q30', label: 'Sudahkah kamu merasa menjalankan tupoksi kamu dengan benar sebagai panitia di suatu event?' },
  { key: 'q31', label: 'Menurut-mu kesalahan apa saja yang selalu terulang dalam setiap event?' },
  { key: 'q32', label: 'Solusi apa menurutmu untuk mengatasi kesalahan yang selalu terulang tersebut?' },
  { key: 'q33', label: 'Adakah hal lain misalnya kritik, pesan, atau cerita yang ingin kamu sampaikan?' },
];

export default function HasilAngketPage() {
  const [data, setData] = useState([]);
  const [openKeys, setOpenKeys] = useState({});

  // 1) Fetch data sekali saat mount
  useEffect(() => {
    fetch('/api/angketxi')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error);
  }, []);

  // 2) Group jawaban per soal
  const grouped = useMemo(() => {
    const g = {};
    QUESTIONS.forEach(({ key }) => {
      g[key] = [];            // inisialisasi array
    });
    data.forEach((row) => {
      QUESTIONS.forEach(({ key }) => {
        if (row[key] !== undefined) {
          g[key].push(row[key]);
        }
      });
    });
    return g;
  }, [data]);

  // toggle open/close accordion
  const toggle = (key) =>
    setOpenKeys(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto h-max pb-30">
      <h1 className="text-2xl font-bold mb-4">Hasil Angket XI</h1>

      {QUESTIONS.map(({ key, label }) => (
        <div
          key={key}
          className="border rounded shadow-sm overflow-hidden"
        >
          {/* header clickable */}
          <button
            onClick={() => toggle(key)}
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
          >
            {label} — {grouped[key]?.length || 0} jawaban
          </button>

          {/* content: daftar jawaban */}
          {openKeys[key] && (
            <ul className="px-6 py-2 list-decimal list-inside bg-white">
              {grouped[key].length > 0
                ? grouped[key].map((ans, i) => (
                    <li key={i} className="py-1">
                      {ans || <em>(kosong)</em>}
                    </li>
                  ))
                : <li><em>Tidak ada jawaban</em></li>
              }
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
