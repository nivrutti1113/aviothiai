# Aviothic AI Contact Form Backend

A production-ready Node.js + Express backend for handling contact form submissions with email notifications.

## Features

- ✅ Express.js server with REST API
- ✅ Email validation and sanitization
- ✅ Nodemailer integration for sending emails
- ✅ CORS enabled for frontend communication
- ✅ Environment variable configuration
- ✅ Automatic email replies to users
- ✅ Detailed error handling
- ✅ Health check endpoint
- ✅ Production-ready deployment ready

## Setup Instructions

### 1. Generate Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Click "App passwords" under "Signing in to Google"
4. Select "Mail" and your device
5. Copy the 16-character app password

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   CONTACT_EMAIL=contact@aviothic.ai
   ```

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Run the Backend

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3001`

### 5. Test the API

**Health Check:**
```bash
curl http://localhost:3001/api/health
```

**Test Contact Form:**
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I am interested in your services."
  }'
```

## API Endpoints

### `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email)",
  "message": "string (required, min 10 chars)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message! We will contact you soon."
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

**Error Response (500):**
```json
{
  "success": false,
  "error": "Failed to send message. Please try again later."
}
```

### `GET /api/health`

**Response (200):**
```json
{
  "success": true,
  "message": "Contact form backend is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Deployment

### Railway.app

1. Create a new project
2. Connect your GitHub repository
3. Add environment variables in the dashboard
4. Set build command: `npm install`
5. Set start command: `npm start`

### Render

1. Create a new web service
2. Connect your GitHub repository
3. Set root directory: `backend`
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables

### AWS EC2

1. Launch an EC2 instance
2. Install Node.js
3. Clone your repository
4. Set up environment variables
5. Run `npm install` and `npm start`
6. Configure security groups to allow port 3001

### Environment Variables for Production

```env
GMAIL_USER=your-production-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
PORT=3001
FRONTEND_URL=https://yourdomain.com
CONTACT_EMAIL=contact@aviothic.ai
```

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique app passwords
- Enable 2FA on your Gmail account
- Consider using a dedicated email service in production (AWS SES, SendGrid)
- Use HTTPS in production

## Troubleshooting

### Email not sending
- Verify Gmail app password is correct
- Check that 2FA is enabled
- Ensure the email account allows "Less secure app access"

### CORS errors
- Verify `FRONTEND_URL` matches your frontend's origin
- Check that CORS is properly configured in server.js

### Port conflicts
- Change `PORT` in `.env` to an available port

## Support

For issues, please check the server logs and verify your environment configuration.