import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pcsduzfqfdchqhsfxhbi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjc2R1emZxZmRjaHFoc2Z4aGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MjU1OTcsImV4cCI6MjAyNDIwMTU5N30.Ipy6rn7t2eUPVQj_bY1CLu9lUGLitGaL51sRqAMG_Zg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
