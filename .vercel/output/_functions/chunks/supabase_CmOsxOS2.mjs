import { createClient } from '@supabase/supabase-js';

function getUrl() {
  return "https://iuidzdvrrrsxevvkbxam.supabase.co";
}
function getAnonKey() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1aWR6ZHZycnJzeGV2dmtieGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MTU1ODAsImV4cCI6MjA5MDk5MTU4MH0.GhtOocOL63uXJ-6ufyk6Sp_Nv658H_tPpBp_Kb9B4hY";
}
function getServiceKey() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1aWR6ZHZycnJzeGV2dmtieGFtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTQxNTU4MCwiZXhwIjoyMDkwOTkxNTgwfQ.qll7nSkcsRsIY-S-YjbM9qhjz7B8LOLKUkpOwbcyjJA";
}
function createServerClient(accessToken) {
  const url = getUrl();
  const key = getAnonKey();
  return createClient(url, key, {
    global: {
      headers: {}
    }
  });
}
function createAdminClient() {
  const url = getUrl();
  const key = getServiceKey();
  return createClient(url, key);
}

export { createAdminClient, createServerClient };
