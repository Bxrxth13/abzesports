
const createEmailTemplate = (title, contentLines) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial Black', 'Arial', sans-serif;
      background-color: #111111;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      padding: 30px 10px;
      background-color: #111111;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #000000;
      border: 1px solid #333333;
      border-top: 4px solid #ff0000;
      border-bottom: 4px solid #ff0000;
    }
    .header {
      background-color: #0a0a0a;
      background-image: repeating-linear-gradient(45deg, #0f0f0f, #0f0f0f 10px, #050505 10px, #050505 20px);
      padding: 40px 20px;
      text-align: center;
      border-bottom: 1px solid #1a1a1a;
    }
    .header img {
      width: 120px;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 4px;
      font-style: italic;
      text-shadow: 3px 3px 0px #ff0000;
    }
    .content {
      padding: 40px 30px;
      line-height: 1.6;
      color: #cccccc;
      font-family: 'Arial', sans-serif;
    }
    .content h2 {
      font-size: 24px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-style: italic;
      color: #ffffff;
      margin-top: 0;
      border-left: 4px solid #ff0000;
      padding-left: 15px;
      font-family: 'Arial Black', 'Arial', sans-serif;
    }
    .highlight {
      color: #ff0000;
      font-weight: 900;
    }
    .footer {
      background-color: #0a0a0a;
      padding: 30px;
      text-align: center;
      font-size: 12px;
      color: #666666;
      font-family: 'Arial', sans-serif;
      border-top: 1px solid #1a1a1a;
    }
    .footer .tagline {
      font-size: 16px;
      font-weight: 900;
      color: #ff0000;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-style: italic;
      margin-top: 15px;
      font-family: 'Arial Black', 'Arial', sans-serif;
    }
    .btn {
      display: inline-block;
      padding: 15px 30px;
      background-color: #ff0000;
      color: #ffffff;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-style: italic;
      font-family: 'Arial Black', 'Arial', sans-serif;
      margin-top: 20px;
    }
    .panel {
      background: #151515;
      padding: 20px;
      border-left: 3px solid #ff0000;
      margin: 20px 0;
    }
    .detail-table {
      width: 100%;
      border-collapse: collapse;
      font-family: 'Arial', sans-serif;
    }
    .detail-table td {
      padding: 12px 10px;
      border-bottom: 1px solid #222;
    }
    .detail-label {
      color: #888888;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      width: 40%;
    }
    .detail-value {
      font-size: 15px;
      color: #ffffff;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <img src="cid:logo" alt="Autobotz Esports Logo" />
        <h1>Autobotz Esports</h1>
      </div>
      <div class="content">
        ${contentLines}
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Autobotz Esports. All rights reserved.</p>
        <p class="tagline">Stay Ready. Stay Competitive.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const getAdminTemplate = (data) => {
  const detailsHtml = Object.entries(data)
    .map(([key, value]) => `
      <tr>
        <td class="detail-label">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
        <td class="detail-value">${value || 'N/A'}</td>
      </tr>
    `).join('');

  return createEmailTemplate(
    'New Registration',
    `
      <h2>New Registration Received</h2>
      <p style="font-size: 16px; margin-bottom: 25px;">A new form submission has been received with the following details. Get ready to gear up!</p>
      <div class="panel">
        <table class="detail-table">
          ${detailsHtml}
        </table>
      </div>
    `
  );
};

export const getUserTemplate = (name) => {
  return createEmailTemplate(
    'Welcome',
    `
      <h2 style="text-align: center; border-left: none; padding-left: 0; font-size: 28px;">ABz Welcomes your interest 🎮🔥</h2>
      <p style="text-align: center; font-size: 18px; line-height: 1.8;">Thank you for registering with <span class="highlight">Autobotz Esports</span>.</p>
      <p style="text-align: center; font-size: 16px;">We have successfully received your details and our team is on it.</p>
      
      <div class="panel" style="text-align: center; border-left: none; border-top: 2px solid #ff0000; border-bottom: 2px solid #ff0000; background: #0a0a0a;">
        <p style="color: #ffffff; font-size: 16px; font-weight: bold; margin: 0;">Our team will review your submission and contact you within 24 hours.</p>
      </div>
      
      <br>
      <p style="text-align: center; color: #888; font-size: 14px; font-weight: bold; text-transform: uppercase;">– Team Autobotz Esports</p>
    `
  );
};
