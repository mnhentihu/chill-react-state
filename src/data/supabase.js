import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hrrkbuoicwqaipmblcie.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycmtidW9pY3dxYWlwbWJsY2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NTYzNjEsImV4cCI6MjA1ODAzMjM2MX0.lGKQ46dyhxlzejfvZ74Wx6BoTHw8dHMGEx5prxjRlqo";

export const supabase = createClient(SUPABASE_URL, ANON_KEY);
