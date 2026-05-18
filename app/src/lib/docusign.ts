import crypto from "crypto";

function b64url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function makeJwt(integrationKey: string, userId: string, oauthHost: string, privateKey: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = b64url(JSON.stringify({
    iss: integrationKey,
    sub: userId,
    aud: oauthHost,
    iat: now,
    exp: now + 3600,
    scope: "signature impersonation",
  }));
  const signingInput = `${header}.${payload}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signingInput);
  return `${signingInput}.${b64url(signer.sign(privateKey))}`;
}

export async function getDocuSignAccessToken(): Promise<string> {
  const integrationKey = process.env.DOCUSIGN_INTEGRATION_KEY ?? "";
  const userId = process.env.DOCUSIGN_USER_ID ?? "";
  const baseUrl = process.env.DOCUSIGN_BASE_URL ?? "https://na4.docusign.net";
  const privateKey = (process.env.DOCUSIGN_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");

  if (!integrationKey || !userId || !privateKey) {
    throw new Error("DocuSign not configured: set DOCUSIGN_INTEGRATION_KEY, DOCUSIGN_USER_ID, DOCUSIGN_PRIVATE_KEY");
  }

  const oauthHost = baseUrl.replace(/^https?:\/\//, "");
  const jwtToken = makeJwt(integrationKey, userId, oauthHost, privateKey);

  const res = await fetch(`https://${oauthHost}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwtToken}`,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DocuSign JWT auth failed (${res.status}): ${err}`);
  }

  const data = await res.json() as { access_token: string };
  return data.access_token;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildNdaHtml(recipientName: string, recipientEmail: string): string {
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const name = escapeHtml(recipientName);
  const email = escapeHtml(recipientEmail);

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
body{font-family:Georgia,serif;font-size:12pt;color:#111;max-width:680px;margin:40px auto;padding:0 40px;line-height:1.65;}
h1{font-size:16pt;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
h2{font-size:12pt;margin-top:28px;}
.parties{background:#f9f9f9;border:1px solid #ddd;padding:16px;border-radius:4px;margin:20px 0;}
</style>
</head><body>
<h1>Non-Disclosure Agreement</h1>
<p style="text-align:center;color:#777;margin:4px 0 20px;">Effective Date: ${date}</p>

<div class="parties">
<p style="margin:0 0 8px;"><strong>Disclosing Party:</strong> Krypt&#243;s CronOS, Inc. (&ldquo;Company&rdquo;)</p>
<p style="margin:0;"><strong>Receiving Party:</strong> ${name} (${email}) (&ldquo;Recipient&rdquo;)</p>
</div>

<p>This Non-Disclosure Agreement (&ldquo;Agreement&rdquo;) is entered into as of the Effective Date between the Company and the Recipient.</p>

<h2>1. Confidential Information</h2>
<p>&ldquo;Confidential Information&rdquo; means any information disclosed by the Company to the Recipient, in any form, that is designated as confidential or that reasonably should be understood to be confidential. This includes, without limitation: the Krypt&#243;s CronOS software platform, source code, curriculum content, CTF stage designs, business strategy, pricing, user data, and technical architecture.</p>

<h2>2. Non-Disclosure and Non-Use</h2>
<p>The Recipient agrees to: (a) hold Confidential Information in strict confidence using at least the same degree of care it uses to protect its own confidential information, but no less than reasonable care; (b) not disclose Confidential Information to any third party without prior written consent from the Company; and (c) use Confidential Information solely for evaluating the Company&rsquo;s platform as a prospective tester or partner.</p>

<h2>3. Exclusions</h2>
<p>These obligations do not apply to information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was known to the Recipient before disclosure; (c) is independently developed without use of Confidential Information; or (d) is required to be disclosed by law or court order, provided the Recipient gives the Company prior written notice.</p>

<h2>4. Term</h2>
<p>This Agreement is effective as of the Effective Date and confidentiality obligations survive for two (2) years thereafter, or until the Confidential Information no longer qualifies as confidential under this Agreement.</p>

<h2>5. No License</h2>
<p>Nothing in this Agreement grants any right, title, or license in or to any Confidential Information or intellectual property of the Company.</p>

<h2>6. Governing Law</h2>
<p>This Agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.</p>

<h2>7. Entire Agreement</h2>
<p>This Agreement constitutes the entire agreement regarding its subject matter and supersedes all prior understandings or negotiations.</p>

<div style="margin-top:80px;page-break-inside:avoid;">
<p style="font-size:10pt;color:#555;">By signing below, the Recipient acknowledges having read, understood, and agreed to be bound by this Agreement.</p>
<table style="width:100%;border-collapse:collapse;margin-top:30px;">
<tr>
<td style="width:55%;padding-right:30px;vertical-align:top;">
<div style="height:52px;"></div>
<div style="border-top:1px solid #333;padding-top:6px;">
<p style="margin:0;font-size:10pt;color:#555;">Signature of Recipient</p>
</div>
<div style="margin-top:40px;">
<div style="height:30px;"></div>
<div style="border-top:1px solid #333;padding-top:6px;">
<p style="margin:0;font-size:10pt;color:#555;">Date Signed</p>
</div>
</div>
</td>
<td style="width:45%;vertical-align:top;padding-top:64px;">
<p style="font-size:10pt;color:#777;margin:0;">${name}</p>
<p style="font-size:9pt;color:#999;margin:4px 0 0;">${email}</p>
</td>
</tr>
</table>
</div>

<p style="margin-top:60px;font-size:9pt;color:#bbb;border-top:1px solid #eee;padding-top:10px;">
Krypt&#243;s CronOS, Inc. &middot; kryptoscronos.com &middot; Confidential
</p>
</body></html>`;
}

export async function sendNdaEnvelope(recipientName: string, recipientEmail: string): Promise<string> {
  const accessToken = await getDocuSignAccessToken();
  const accountId = process.env.DOCUSIGN_ACCOUNT_ID ?? "";
  const baseUrl = process.env.DOCUSIGN_BASE_URL ?? "https://na4.docusign.net";

  if (!accountId) throw new Error("DocuSign not configured: set DOCUSIGN_ACCOUNT_ID");

  const docBase64 = Buffer.from(buildNdaHtml(recipientName, recipientEmail)).toString("base64");

  const envelope = {
    emailSubject: "Please sign the NDA — Kryptós CronOS demo access",
    emailBlurb: `Hi ${recipientName}, please sign this NDA to access the Kryptós CronOS platform. Takes about 2 minutes.`,
    documents: [{
      documentBase64: docBase64,
      name: "Kryptós CronOS Non-Disclosure Agreement",
      fileExtension: "html",
      documentId: "1",
    }],
    recipients: {
      signers: [{
        email: recipientEmail,
        name: recipientName,
        recipientId: "1",
        tabs: {
          signHereTabs: [{
            documentId: "1",
            pageNumber: "1",
            anchorString: "Signature of Recipient",
            anchorYOffset: "-55",
            anchorUnits: "pixels",
            anchorXOffset: "0",
          }],
          dateSignedTabs: [{
            documentId: "1",
            pageNumber: "1",
            anchorString: "Date Signed",
            anchorYOffset: "-38",
            anchorUnits: "pixels",
            anchorXOffset: "0",
          }],
        },
      }],
    },
    status: "sent",
    eventNotification: {
      url: "https://kryptoscronos.com/api/webhooks/docusign",
      loggingEnabled: true,
      requireAcknowledgment: true,
      useSoapInterface: false,
      includeDocumentFields: false,
      includeDocuments: false,
      includeHMAC: true,
      envelopeEvents: [
        { envelopeEventStatusCode: "completed" },
        { envelopeEventStatusCode: "declined" },
        { envelopeEventStatusCode: "voided" },
      ],
    },
  };

  const res = await fetch(`${baseUrl}/restapi/v2.1/accounts/${accountId}/envelopes`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(envelope),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DocuSign envelope failed (${res.status}): ${err}`);
  }

  const data = await res.json() as { envelopeId: string };
  return data.envelopeId;
}
