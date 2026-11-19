/**
 * Kosha Life – collab order tracker
 * Paste this whole file into Extensions → Apps Script of her Google Sheet.
 * It creates two tabs automatically: "Orders" and "QR Scans".
 */

// Keep these in sync with the order page
const PRICES = { "saffrona": 751, "rose-ras": 399, "rice-ras": 449, "hair-mask": 120 };
const NAMES  = { "saffrona": "Saffrona Under-Eye Elixir", "rose-ras": "Rose Ras", "rice-ras": "Rice Ras", "hair-mask": "Hair Mask" };
const DISCOUNT_PERCENT = 10;

const ORDER_HEADERS = ["Date & time", "Order ID", "Name", "Phone", "Items", "Subtotal (MRP)", "Discount", "Total to pay", "Coupon", "Came via", "Status"];
const SCAN_HEADERS  = ["Date & time", "Came via", "Device"];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (p.type === "scan") {
    getTab_(ss, "QR Scans", SCAN_HEADERS).appendRow([new Date(), clean_(p.source), clean_(p.device)]);
    return ok_();
  }

  if (p.type === "order") {
    // Recalculate prices here so the sheet always has the correct amounts
    let sub = 0, total = 0;
    const lines = [];
    String(p.itemIds || "").split(",").forEach(function (pair) {
      const bits = pair.split(":");
      const id = bits[0], qty = Math.min(Math.max(parseInt(bits[1], 10) || 0, 0), 999);
      if (!PRICES[id] || !qty) return;
      sub += PRICES[id] * qty;
      total += Math.round(PRICES[id] * (100 - DISCOUNT_PERCENT) / 100) * qty;
      lines.push(NAMES[id] + " x " + qty);
    });
    if (!lines.length) return ok_();

    getTab_(ss, "Orders", ORDER_HEADERS).appendRow([
      new Date(), clean_(p.orderId), clean_(p.name), "'" + String(p.phone || "").replace(/\D/g, "").slice(0, 10),
      lines.join(", "), sub, sub - total, total, clean_(p.coupon), clean_(p.source), "New"
    ]);
  }
  return ok_();
}

// Opening the web-app link in a browser just shows this (useful to check it is live)
function doGet() {
  return ContentService.createTextOutput("Kosha Life order tracker is running.");
}

function getTab_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
  return sh;
}

// Stops anyone typing a formula (=, +, -, @) into the sheet, and limits length
function clean_(v) {
  let s = String(v == null ? "" : v).slice(0, 200);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function ok_() {
  return ContentService.createTextOutput("ok");
}
