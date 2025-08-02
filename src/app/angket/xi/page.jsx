'use client'

import { useEffect, useRef } from "react";
import { useState } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie"

const Page = () => {
    const [q1, setq1] = useState("")
    const [q2, setq2] = useState("")
    const [q3, setq3] = useState("")
    const [q4, setq4] = useState("")
    const [q5, setq5] = useState("")
    const [q6, setq6] = useState("")
    const [q7, setq7] = useState("")
    const [q8, setq8] = useState("")
    const [q9, setq9] = useState("")
    const [q10, setq10] = useState("")
    const [q11, setq11] = useState("")
    const [q12, setq12] = useState("")
    const [q13, setq13] = useState("")
    const [q14, setq14] = useState("")
    const [q15, setq15] = useState("")
    const [q16, setq16] = useState("")
    const [q17, setq17] = useState("")
    const [q18, setq18] = useState("")
    const [q19, setq19] = useState("")
    const [q20, setq20] = useState("")
    const [q21, setq21] = useState("")
    const [q22, setq22] = useState("")
    const [q23, setq23] = useState("")
    const [q24, setq24] = useState("")
    const [q25, setq25] = useState("")
    const [q26, setq26] = useState("")
    const [q27, setq27] = useState("")
    const [q28, setq28] = useState("")
    const [q29, setq29] = useState("")
    const [q30, setq30] = useState("")
    const [q31, setq31] = useState("")
    const [q32, setq32] = useState("")
    const [q33, setq33] = useState("")
    const [q34, setq34] = useState("")




    useEffect(() => {
  const textareas = document.querySelectorAll("textarea[data-autogrow]");

  textareas.forEach((textarea) => {
    const resize = () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    resize(); 
    textarea.addEventListener("input", resize);


    return () => textarea.removeEventListener("input", resize);
  });
}, []);

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/angketxi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34})
        }) 

        if (response.ok) {
            Cookies.set('status', 'sm', {expires: 10})
            redirect(`/angket/sudahmengisi`);
        } else {
            console.log("Gagal")
        }
    };

    const status = Cookies.get('status') 
    if (status === 'sm') {
        redirect(`/angket/sudahmengisi`);
    }

    

    return (
        <div className="w-full h-max flex justify-center bg-blue-500 pb-10">
            <div className="bg-blue-100 w-85 h-max mt-5 rounded-2xl pb-20 flex flex-col items-center">
                <div className="bg-white w-85 h-70 rounded-2xl px-4 py-6 flex flex-col gap-4 mb-10">
                    <h1 className="text-center font-black text-xl">ANGKET EVALUASI OSIS 1 XI</h1>
                    <h2 className="font-normal text-sm">Angket ini bertujuan untuk mengevaluasi kinerja OSIS selama periode 25/26 berlangsung selama ini</h2>
                    <div className="font-bold text-sm">
                    <h2>- Bersifat Anonim (Tidak ada yang akan mengetahui identitas kamu)</h2>
                    <h2>- Berikanlah Kritik dan Saran yang membangun</h2>
                    <h2>- Dilarang menyinggung SARA dan Mengutarakan Kebencian</h2>
                    </div>
                </div>
                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">I. Evaluasi Umum</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">1. Apa pendapatmu secara keseluruhan tentang kinerja OSIS saat ini?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        placeholder="Jawaban..."
                        value={q1}
                        onChange={(e) => setq1(e.target.value)}
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">2. Berikan Kritik terhadap Rapat yang biasa dilaksanakan OSIS (Kekurangan)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q2}
                        onChange={(e) => setq2(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">3. Sebutkan hal yang menurutmu perlu diperbaiki di OSIS</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q3}
                        onChange={(e) => setq3(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">II. Pengalaman Individu</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">4. Apakah kamu merasa sudah ditempatkan pada seksi bidang yang benar?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q4}
                        onChange={(e) => setq4(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">5. Bagaimana Pengalaman kamu selama berada disekbid?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q5}
                        onChange={(e) => setq5(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">6. Bagaimana pandangan kamu terhadap angkatan kelas 12 sekarang?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q6}
                        onChange={(e) => setq6(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">7. Bagaimana pandangan kamu terhadap angkatan sebaya kamu (Satu Angkatan)?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q7}
                        onChange={(e) => setq7(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">8. Ceritakan momen ketika kamu merasa sangat dihargai atau justru diabaikan sebagai pengurus. (Jika Ada)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q8}
                        onChange={(e) => setq8(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">9. Apa kendala pribadi atau tim/sekbid yang menghambat kinerja kamu sebagai pengurus?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q9}
                        onChange={(e) => setq9(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">III. Evaluasi Umum Badan Pengurus Harian (BPH)</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">10. Apa satu hal terburuk dari kinerja BPH selama periode ini?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q10}
                        onChange={(e) => setq10(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">11. Apa satu hal terbaik dari kinerja BPH selama periode ini?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q11}
                        onChange={(e) => setq11(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">12. Berikan Kritik Kepada BPH secara keseluruhan</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q12}
                        onChange={(e) => setq12(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">13. Berikan Saran Kepada BPH secara Keseluruhan</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q13}
                        onChange={(e) => setq13(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">14. Adakah hal yang ingin kamu sampaikan kepada BPH?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q14}
                        onChange={(e) => setq14(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">IV. Evaluasi Khusus Badan Pengurus Harian (BPH)</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">15. Berikan Kritik terhadap Ketua OSIS (Kang Reza)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q15}
                        onChange={(e) => setq15(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">16. Tuliskan Saran atau Pesan terhadap Ketua OSIS (Kang Reza)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q16}
                        onChange={(e) => setq16(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">17. Berikan Kritik terhadap Wakil Ketua OSIS (Kang Cep Rezqy)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q17}
                        onChange={(e) => setq17(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">18. Tuliskan Saran atau Pesan terhadap Wakil Ketua OSIS (Kang Cep Rezqy)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q18}
                        onChange={(e) => setq18(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">19. Berikan Kritik terhadap Sekretaris OSIS (Kang Ruben)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q19}
                        onChange={(e) => setq19(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">20. Tuliskan Saran atau Pesan terhadap Sekretaris OSIS (Kang Ruben)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q20}
                        onChange={(e) => setq20(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">21. Berikan Kritik terhadap Bendahara OSIS (Teh Kairina)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q21}
                        onChange={(e) => setq21(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">22. Tuliskan Saran atau Pesan terhadap Bendahara OSIS (Teh Kairina)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q22}
                        onChange={(e) => setq22(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">23. Berikan Kritik terhadap Koordinator Kelas XI OSIS (Teh Nazwa)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q23}
                        onChange={(e) => setq23(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">24. Tuliskan Saran atau Pesan terhadap Koordinator Kelas XI OSIS (Teh Nazwa)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q24}
                        onChange={(e) => setq24(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">25. Berikan Kritik terhadap Koordinator Kelas X OSIS (Kang Hafizh)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q25}
                        onChange={(e) => setq25(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">26. Tuliskan Saran atau Pesan terhadap Koordinator Kelas X OSIS (Kang Hafizh)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q26}
                        onChange={(e) => setq26(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">V. Evaluasi Event</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">27. Apakah menurut kamu rapat untuk event terlalu mendadak?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q27}
                        onChange={(e) => setq27(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">28. Menurut pendapat-mu Idealnya Berapa lama waktu yang dibutuhkan untuk persiapan event?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q28}
                        onChange={(e) => setq28(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">29. Menurut mu, bagaimana seharusnya perencanaan event?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q29}
                        onChange={(e) => setq29(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">30. Sudahkah kamu merasa menjalankan tupoksi kamu dengan benar sebagai panitia di suatu event? Jika belum, maka apa kendalanya?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q30}
                        onChange={(e) => setq30(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-2 gap-4">
                    <h2 className="">31. Menurut-mu kesalahan apa saja yang selalu terulang dalam setiap event?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q31}
                        onChange={(e) => setq31(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">32. Solusi apa menurutmu untuk mengatasi kesalahan yang selalu terulang tersebut?</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q32}
                        onChange={(e) => setq32(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="bg-white w-85 h-max rounded-tl-2xl rounded-tr-2xl px-5 py-2 flex flex-col mb-2 gap-4">
                    <h1 className="font-bold text-2xl">V. Evaluasi Event</h1>
                </div>
                <div className="bg-white w-85 min-h-40 px-5 py-6 flex flex-col mb-8 gap-4 rounded-br-2xl rounded-bl-2xl">
                    <h2 className="">Adakah hal lain misalnya kritik, pesan, atau cerita yang ingin kamu sampaikan? (Curhat, Keluarkan seluruh unek unek dalam diri)</h2>
                    <textarea
                        data-autogrow
                        rows="1"
                        value={q33}
                        onChange={(e) => setq33(e.target.value)}
                        placeholder="Jawaban..."
                        className="w-full overflow-hidden resize-none p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>

                <div className="h-max w-max px-4 py-1 bg-green-500 rounded-lg" onClick={handleSubmit}>
                    <h1 className="font-bold text-white">KIRIM JAWABAN</h1>
                </div>
            </div>
        </div>
    )
}


export default Page;