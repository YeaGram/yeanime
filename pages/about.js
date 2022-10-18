import Header from "../components/header";
import SectionHeader from "../components/header/sectionHeader";
export default function About() {
  return (
    <>
      <Header />
      <div className="mt-28">
        <SectionHeader>About</SectionHeader>
        <main className="gap-3 px-6 font-Merriweather flex flex-col mt-5 text-gray-700">
          <h2>YooW!!</h2>
          <p>
            Selamat datang di page about, eaaa. Ok ini adalah page dimana saya
            menjelaskan tentang apa saja yang ada di web ini hehe.
            <span className="italic opacity-50"> apasih </span>
          </p>
          <p>
            Ok, Tujuan utama saya membangun website ini karena saya{" "}
            <b>Gabut!</b>, daripada saya gak ada kerjaan mending ngisi waktu
            dengan ngedevelop website, hitung hitung buat nambah ilmu seputar
            IT.
          </p>
          <p>
            Semua aset yang saya gunakan disini berlisensi <b>Gratis!</b>{" "}
            seperti icon,font, dll. Disini saya menggunakan teknologi yang bisa
            dibilang baru bagi saya, seperti <i>NextJS</i>,<i>TailwindCSS</i>
            ,dan <i>API</i> atau lebih tepatnya <i>Jikan API</i> yang mana
            merupakan open api atau public api yang bisa diakses tanpa
            mengunakan kredensial atau authentikasi alias login lah :v.
          </p>
          <p>
            Itulah sedikit tentang website ini semoga dengan selesainya website
            ini dapat berguna bagi saya sebagai tempat melatih ilmu yang
            didapatkan.
          </p>
          <p className="text-right mt-7">
            Terimakasih, <i>Dimas Oktober 2022</i>
          </p>
        </main>
      </div>
    </>
  );
}
