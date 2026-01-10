import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cvziqzkbpcwjzvhbwtpk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_PdCTyA2Eqcm4t_tFJv9cqw_QSq8dxR0";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
