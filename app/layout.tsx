import type { Metadata } from 'next';
import './globals.css';
const origin = 'https://grandview-capital.rare-kiwi-6018.chatgpt.site';
export const metadata: Metadata = {metadataBase:new URL(origin),title:'Grandview Capital | Business Capital Consulting',description:'A broader view. A clearer path to capital. Independent capital consulting for growing businesses.',icons:{icon:'/icon.svg'},openGraph:{title:'Grandview Capital',description:'A broader view. A clearer path to capital.',type:'website',images:[{url:origin+'/og.png',width:1732,height:908}]},twitter:{card:'summary_large_image',title:'Grandview Capital',description:'Independent capital consulting for growing businesses.',images:[origin+'/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
