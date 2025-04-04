export async function getPsychologistAll(filter: any) {
    const res = await fetch('https://n8n-v2.hrani.live/webhook/get-filtered-psychologists-test-contur')
    console.log(filter);
    
    return res.json();
}