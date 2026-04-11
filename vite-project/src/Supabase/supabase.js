import {createClient} from "https://esm.sh/@supabase/supabase-js@2" 
console.log(createClient);

const supabaseUrl = "https://vgrymyqcnneavpvpfapd.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZncnlteXFjbm5lYXZwdnBmYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MzY4MDYsImV4cCI6MjA5MTMxMjgwNn0.RejLAw5nevUErSimYxaPoPp0MnlW0pHIPF1pEDL4s_s"

export const supabase = createClient(supabaseUrl,supabaseKey);
console.log(supabase);

// oYuavR4JUkBUnsmv

// oYuavR4JUkBUnsmv