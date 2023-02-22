import { useState } from 'react';

export default function App() {
  const [dataSiswa, setDataSiswa] = useState([]);
  const handleSubmit = (e) => {
    //stop form reload page
    e.preventDefault();

    //get input data
    let fullname = e.target.fullname.value;
    let dob = e.target.dob.value;
    let addres = e.target.addres.value;

    setDataSiswa([
      ...dataSiswa,
      {
        fullname: fullname,
        dob: dob,
        addres: addres,
        id: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      },
    ]);

    if (fullname == '') {
      alert('masukkan NAMA');
      return;
    }

    if (dob == '') {
      alert('masukkan Teampat Tanggal Lahir');
      return;
    }

    if (addres == '') {
      alert('masukkan addres');
      return;
    }
  };

  return (
    <div className="w-screen min-h-screen bg-yellow-100">
      <div className="w-full max-w-[900px] flex flex-col mx-auto p-10">
        <h1 className="text-4xl text-violet-800">Data Siswa</h1>
        <form action="" className="w-full flex flex-col p-8 bg-white shadow-lg gap-4 mt-10 rounded-xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Nama Lengkap</label>
            <input type="text" placeholder="Nama Lengkap" id="fullname" className="h-10 px-3 font-light rounded-xl border-[1px] border-slate-300 outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dob">Tempat Lahir</label>
            <input type="text" placeholder="Tempat lahir" id="dob" className="h-10 px-3 font-light rounded-xl border-[1px] border-slate-300 outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="addres">Alamat</label>
            <textarea type="text" placeholder="Alamat" id="addres" className="h-[200px] px-3 font-light rounded-xl border-[1px] border-violet-500 outline-none" />
          </div>

          <button type="submit" className="w-[120px] h-10 bg-violet-800 text-white ml-auto active:bg-violet-400 active:shadow-xl rounded-[50px]">
            Submit
          </button>
        </form>

        {dataSiswa.map((e) => {
          return (
            <div className="w-full flex flex-col bg-violet-200 shadow-nd p-3 my-6 shadow-md">
              <small className="m-0">{e.date}</small>
              {e.id}
              <h1 className="text-2xl font-light">{e.fullname}</h1>
              <small>{e.addres}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
