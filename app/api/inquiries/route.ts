import { getDatabase } from '@/lib/database';
import { programs } from '@/lib/programs';
export async function POST(request:Request){
 const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
 const origin=request.headers.get('origin'); if(origin&&origin!==new URL(request.url).origin)return json({error:'Please submit your inquiry from this website.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'Expected a JSON inquiry.'},415);
 let data:Record<string,unknown>;
 try{const body=await request.text();if(body.length>16000)return json({error:'Your inquiry is too long.'},413);data=JSON.parse(body);if(!data||typeof data!=='object'||Array.isArray(data))throw new Error();}catch{return json({error:'We couldn’t read your inquiry. Please try again.'},400)}
 if(data.website)return json({error:'Your inquiry could not be submitted.'},400);
 const limits:Record<string,number>={requestId:36,company:160,program:80,goals:3000,firstName:80,lastName:80,email:254,phone:30}; const clean:Record<string,string>={};
 for(const [key,max] of Object.entries(limits)){if(typeof data[key]!=='string'||(data[key] as string).length>max)return json({error:'Please check your details and try again.'},400);clean[key]=(data[key] as string).trim();if(key!=='goals'&&!clean[key])return json({error:'Please complete all required fields.'},400)}
 if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(clean.requestId)||!/^\S+@\S+\.\S+$/.test(clean.email)||!/^\+?[\d\s().-]+$/.test(clean.phone)||clean.phone.replace(/\D/g,'').length<7||clean.phone.replace(/\D/g,'').length>15||typeof data.smsConsent!=='boolean'||!['Not sure yet',...programs.map(p=>p[0])].includes(clean.program))return json({error:'Please check your email, phone number, and capital pathway.'},400);
 try{const reference=`GV-${clean.requestId.slice(0,8).toUpperCase()}`;await getDatabase().prepare('INSERT INTO inquiries (id, reference, company, program, goals, first_name, last_name, email, phone, sms_consent, consent_version, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING').bind(clean.requestId,reference,clean.company,clean.program,clean.goals,clean.firstName,clean.lastName,clean.email,clean.phone,data.smsConsent?1:0,'2026-09-11',new Date().toISOString()).run();return json({reference},201)}catch{return json({error:'We couldn’t save your request right now. Your details are still here—please try again shortly.'},503)}
}
