const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = 'SEU_EMAIL_AQUI@exemplo.com';

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const params = event && event.parameter ? event.parameter : {};
    const name = normalize_(params.name);
    const email = normalize_(params.email).toLowerCase();
    const whatsapp = normalize_(params.whatsapp);
    const source = normalize_(params.source);

    if (name.length < 2 || !isValidEmail_(email) || !isValidWhatsapp_(whatsapp)) {
      return json_({
        success: false,
        message: 'Dados obrigatórios inválidos.'
      });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data e hora', 'Nome', 'E-mail', 'WhatsApp', 'Página de origem']);
      sheet.setFrozenRows(1);
    }

    const lead = [
      new Date(),
      safeCell_(name),
      safeCell_(email),
      safeCell_(whatsapp),
      safeCell_(source)
    ];

    sheet.appendRow(lead);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: `Novo lead Cheffy: ${name}`,
      htmlBody: [
        '<h2>Novo cadastro no Cheffy</h2>',
        `<p><strong>Nome:</strong> ${escapeHtml_(name)}</p>`,
        `<p><strong>E-mail:</strong> ${escapeHtml_(email)}</p>`,
        `<p><strong>WhatsApp:</strong> ${escapeHtml_(whatsapp)}</p>`,
        `<p><strong>Origem:</strong> ${escapeHtml_(source || 'Não informada')}</p>`,
        `<p><strong>Recebido em:</strong> ${Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm')}</p>`
      ].join('')
    });

    return json_({ success: true });
  } catch (error) {
    console.error(error);
    return json_({
      success: false,
      message: 'Não foi possível registrar o cadastro.'
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({
    service: 'Cheffy leads',
    status: 'online'
  });
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function normalize_(value) {
  return String(value || '').trim().slice(0, 200);
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWhatsapp_(whatsapp) {
  const digits = whatsapp.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}

function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
