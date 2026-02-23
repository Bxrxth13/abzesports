
const createEmailTemplate = (title, contentLines) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #000000;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0a0a0a;
      border: 1px solid #333;
      border-radius: 8px;
    }
    .header {
      background-color: #000000;
      padding: 20px;
      text-align: center;
      border-bottom: 2px solid #ff0000;
    }
    .header h1 {
      color: #ff0000;
      margin: 0;
      text-transform: uppercase;
      font-size: 24px;
      letter-spacing: 2px;
    }
    .content {
      padding: 30px;
      line-height: 1.6;
      color: #e0e0e0;
    }
    .highlight {
      color: #ff0000;
      font-weight: bold;
    }
    .footer {
      background-color: #000000;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-top: 1px solid #333;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #ff0000;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
      font-weight: bold;
    }
    .detail-row {
      margin-bottom: 10px;
      border-bottom: 1px solid #222;
      padding-bottom: 5px;
    }
    .detail-label {
      color: #888;
      font-size: 0.9em;
      text-transform: uppercase;
    }
    .detail-value {
      font-size: 1.1em;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Autobotz Esports</h1>
    </div>
    <div class="content">
      ${contentLines}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Autobotz Esports. All rights reserved.</p>
      <p>Stay Ready. Stay Competitive.</p>
    </div>
  </div>
</body>
</html>
`;

export const getAdminTemplate = (data) => {
    const detailsHtml = Object.entries(data)
        .map(([key, value]) => `
      <div class="detail-row">
        <div class="detail-label">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
        <div class="detail-value">${value || 'N/A'}</div>
      </div>
    `).join('');

    return createEmailTemplate(
        'New Registration',
        `
      <h2 style="color: #ff0000; margin-top: 0;">New Registration Received</h2>
      <p>A new form submission has been received with the following details:</p>
      <div style="background: #111; padding: 20px; border-radius: 4px; margin: 20px 0;">
        ${detailsHtml}
      </div>
    `
    );
};

export const getUserTemplate = (name) => {
    return createEmailTemplate(
        'Welcome',
        `
      <h2 style="color: #ffffff; font-size: 28px; text-align: center;">Congratulations 🎮🔥!</h2>
      <p style="text-align: center; font-size: 16px;">Thank you for registering with <span class="highlight">Autobotz Esports</span>.</p>
      <p style="text-align: center;">We have successfully received your details.</p>
      <br>
      <p style="text-align: center; color: #ccc;">Our team will review your submission and contact you within 24 hours.</p>
      <br>
      <p style="text-align: center; font-size: 18px; font-weight: bold; font-style: italic; color: #ff0000;">
        Stay ready. Stay competitive.
      </p>
      <br>
      <p style="text-align: center;">– Team Autobotz Esports</p>
    `
    );
};
