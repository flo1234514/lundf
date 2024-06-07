const supabaseUrl = 'https://deroqcukulkdrwqtpqzh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcm9xY3VrdWxrZHJ3cXRwcXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3Njg2OTcsImV4cCI6MjAzMzM0NDY5N30.glgZLXA4iFCmG20xK_XIpnXot9jYCUvcYKu_8xjJJLQ';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

export { supabase };
