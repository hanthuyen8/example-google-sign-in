# Hướng dẫn làm Google Sign-In cho Web (Ko Firebase):
Document: https://developers.google.com/identity/gsi/web/guides/overview
Lưu ý:
- Hướng dẫn chỉ mang tính chất tham khảo, không thể áp dụng được cho tất cả các trường hợp thực tế.
- Khi đó, đọc tài liệu của Google để có hướng giải quyết chính xác.
- Các Path, URL khi sử dụng đều ko được để dấu `/` ở đuôi, ví dụ:
  - https://example.com -> Đúng
  - https://example.com/ -> Sai
  - http://localhost:1111 -> Đúng
  - http://localhost:1111/ -> Sai

Để dễ thống nhất trong hướng dẫn, quy ước local testing như sau:
- Client sẽ sử dụng port `8082`
- Server sẽ sử dụng port `8083`

### Bước1: Tạo 1 OAuth Client Token (nếu chưa có):
Document: https://console.developers.google.com/auth/clients
- Chọn project cần sử dụng
- Bấm Create Client -> Web application
- Điền Name
- Điền Authorized JavaScript origins:
  - Để local testing: điền vào thêm `http://localhost` & `http://localhost:8082`
- Điền Authorized redirect URIs:
  - Để local testing (đối với project này): điền vào thêm `http://localhost:8082/auth`
- Bấm CREATE
- Copy Client ID
- 
### Bước 2: Cấu hình OAuth Consent Screen (nếu chưa làm):
Document: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#configure_your_oauth_consent_screen.
#### Branding:
- Vào Branding: https://console.cloud.google.com/auth/branding?inv=1&invt=AbrAXA
- Chọn project cần sử dụng
- Điền các thông tin
- Upload App logo
- Điền App domain & Authorized domains
- Submit
#### Audience:
- Vào Audience: https://console.cloud.google.com/auth/audience?inv=1&invt=AbrAXA
- Bấm Make External

### Bước 3: Thiết lập Content Security Policy (nếu cần):
Document: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#content_security_policy
- Nếu Webpage đã khai báo Content-Security-Policy từ trước đó, thì cần bổ sung theo như document
- Ngược lại, thì có thể bỏ qua bước này.

### Bước 4: Thiết lập Cross Origin Opener Policy (nếu sử dụng flow Pop-up):
Document: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#cross_origin_opener_policy

### Bước 5: Tích hợp thư viện (Client):
Ở đây sử dụng package từ bên thứ 3 (ko phải của Google):
Package name: `@react-oauth/google@latest`
Document: https://www.npmjs.com/package/@react-oauth/google
Setup project `client`:
- Chạy các lệnh sau
```
cd client
npm install
cp .env.example .env
```
- Sử dụng Client ID đã copy ở trên & điền vào file `./client/.env` trường `GOOGLE_OAUTH_CLIENT_ID`