# MIMINE WEB v1.0.0
JOSEPH88's MIMINE 프로젝트의 웹 애플리케이션입니다.

# Version
- **Next.js** `15.5.2`
- **React** `19.1.0`
- **Node.js** `v23.3.0`
- **npm** `11.0.0`


## Architecture Overview
This Next.js 15 app uses **Clean Architecture** with feature-based modules. Each feature follows a strict 3-layer pattern:
- `domain/` - Entities, repositories (interfaces), and use cases
- `infrastructure/` - Repository implementations and external service integrations  
- `presentation/` - React components, hooks, and UI logic


<div align="center">
  <img src="https://github.com/user-attachments/assets/3057e904-dafb-4d34-b5ce-2c819d77f5bc" alt="Home Screen" style="width: 200px; height: 250px; object-fit: cover; margin: 5px;">
  <img src="https://github.com/user-attachments/assets/9effee3d-a490-49c3-9636-1355e617756f" alt="Map Feature" style="width: 200px; height: 250px; object-fit: cover; margin: 5px;">
  <img src="https://github.com/user-attachments/assets/55a5416a-64c0-4fd9-9fcf-cdae398fea8d" alt="Community Feature" style="width: 200px; height: 150px; object-fit: cover; margin: 5px;">
  <img src="https://github.com/user-attachments/assets/5c4a1f82-f214-4d5c-8215-af191282a036" alt="Community Feature" style="width: 200px; height: 150px; object-fit: cover; margin: 5px;">
</div>