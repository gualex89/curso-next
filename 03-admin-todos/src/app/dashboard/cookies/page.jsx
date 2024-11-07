import { TabBar } from "@/components";
import { cookies } from 'next/headers'


export const metadata = {
 title: 'Cookies Page',
 description: 'Cookies Page',
};
export default async function CookiesPage() {

  // De esta manera obtenemos la cookiestore del usuario
  const cookieStore = await cookies()
  const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';

  // De esta manera obtenemos todas las cookies 
  const allCookies = cookieStore.getAll()
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={Number(cookieTab)} />
      </div>

    </div>
  );
}