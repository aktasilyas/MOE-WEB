import Header from "../../pages/header/Header";
import Sidebar from "../../pages/sidebar/Sidebar";
import '../../App.css'
 function Dashboard() {
  return (
   <div className="h-full bg-white  w-full flex pl-  flex-col  dark:bg-gray-900 dark:text-white">
      <Header/>
      <main className="flex-auto flex row-auto ">
        <aside className="sidebar">
          <Sidebar/>
        </aside>
        <section className="pl-5 w-full pt-5 flex justify-center items-center ">
         <p className="text-3xl font-extrabold">Burası Sayfanın Dinamik Alanı</p>
        </section>
      </main>
   </div>
  )
}
export default Dashboard;