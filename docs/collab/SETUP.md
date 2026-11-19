# Kosha Life collab order page — setup

How it works: the customer scans the QR on the food packet, picks products, enters name and number, and taps **Place order on WhatsApp**.
The order is saved to a Google Sheet, and WhatsApp opens to +91 94619 11119 with the order already typed (10% off with code KK102026 already applied).
Payment happens on WhatsApp, the same way it does now.

## Step 1: Make the Google Sheet (about 5 minutes, done by her)

1. Go to sheets.google.com and create a blank sheet. Name it "Kosha Collab Orders".
2. In the menu, click **Extensions → Apps Script**.
3. Delete everything in the editor, paste in the whole of `google-sheet-script.gs`, and click the 💾 Save icon.
4. Click **Deploy → New deployment**. Click the ⚙ gear and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, then **Authorize access** and pick her Google account.
   Google may show "Google hasn't verified this app". That's normal for your own script: click **Advanced → Go to (project) → Allow**.
6. Copy the **Web app URL** (it ends in `/exec`) and send it to me (or paste it yourself, see step 2).

The sheet creates two tabs on its own:
- **Orders**: date, order ID, name, phone, items, amounts, coupon, which brand it came from, and a Status column she can update (New / Paid / Shipped).
- **QR Scans**: one row per visit, so she can see how many people scanned compared with how many ordered.

## Step 2: Put the Sheet link into the page

The page lives in this repo at `public/collab/index.html` and is live at **https://thekoshalife.com/collab**.
Open that file, find `sheetUrl: ""` near the bottom, paste the link between the quotes, then commit and push:
`sheetUrl: "https://script.google.com/macros/s/....../exec",`

## Step 3: Hosting

Nothing extra is needed. It is deployed along with the main website.

## Step 4: Make the QR

Run `python docs/collab/make_qr.py "https://thekoshalife.com/collab?src=BrandName"` (needs `pip install segno`).
The `?src=` part tags every order and scan with that brand. With another collab later, the same page gets a new QR with a different name.

Before printing: test the QR on a phone, scan it, and place one test order. Check that it shows up in the Sheet and that WhatsApp opens.

## Changing things later

Prices, products, the coupon, the discount and the WhatsApp number are all in the `SETTINGS` and `PRODUCTS` sections near the bottom of `public/collab/index.html`.
If you change prices, also change `PRICES` at the top of the Google script, then go to **Deploy → Manage deployments → Edit → New version**.

To swap the Hair Mask photo, save it as `public/collab/hair-mask.jpg`. Until then, the page shows the Kosha logo in its place.
