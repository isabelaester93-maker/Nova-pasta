// Configuração de conexão com o Supabase do GameZone
const SUPABASE_URL = "https://supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsd3JncmJobmNjZGFja2x3a3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1ODA0MDQsImV4cCI6MjEwNjE1NjQwNH0.-iTTo4SHgY2pTUuxi--dm17jBMvcsuC_pSuBrqSG7c0";

// Cria o cliente global do Supabase para usar no site inteiro
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Conexão com o Supabase configurada com sucesso para o GameZone!");
