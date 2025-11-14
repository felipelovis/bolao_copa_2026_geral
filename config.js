// ==================== CONFIGURAÇÕES ====================

// DATAS LIMITE por fase (CORRIGIDO PARA 2026!)
const DATAS_LIMITE = {
    'Grupo': new Date('2026-06-12T14:00:00'),
    '16 avos': new Date('2025-11-12T12:00:00'),
    'Oitavas': new Date('2025-11-12T12:00:00'),
    'Quartas de final': new Date('2025-11-12T16:00:00'),
    'Semifinais': new Date('2025-11-12T16:00:00'),
    'Terceiro e Quarto': new Date('2025-11-12T14:00:00'),
    'Final': new Date('2025-11-12T16:00:00'),
};

// ID DO GOOGLE SHEETS
const SPREADSHEET_ID = '1JgNY9wNnoYiR2bDzotxoAujXS7eUHReFG_l9-fZ_eqA';

// CHAVE DA API DO GOOGLE
const API_KEY = 'AIzaSyB2Svcz1v91fSfZ3pX8ukjdFDAPl_KOjsCQ';

// URL DO BACKEND
const BACKEND_URL = 'https://bolao-2026-geral-backend.vercel.app';

// ========================================================

// NOMES DAS ABAS
const ABA_JOGOS = 'JOGOS';
const ABA_PALPITES = 'PALPITES';

// INTERVALOS (RANGES) DAS ABAS
const RANGE_JOGOS = 'A:H';
const RANGE_PALPITES = 'A:H';


// IDs das colunas no Google Sheets (base 0)
const COL_ID_JOGO = 0;
const COL_FASE = 1;
const COL_DATA = 2;
const COL_HORARIO = 3;
const COL_TIME_A = 4;
const COL_TIME_B = 5;
const COL_GOLS_A = 6;
const COL_GOLS_B = 7;

// URLs das APIs do Google Sheets
const SHEETS_API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values`;
