// 서비스워커 설치 (최초 1회 실행)
self.addEventListener("install", (event) => {
    console.log("Service Worker 설치됨");
    self.skipWaiting(); // 바로 활성화
  });
  
  // 서비스워커 활성화
  self.addEventListener("activate", (event) => {
    console.log("Service Worker 활성화됨");
    event.waitUntil(self.clients.claim());
  });
  
  // 알림 클릭 시 동작
  self.addEventListener("notificationclick", (event) => {
    event.notification.close(); // 알림 닫기
    event.waitUntil(
      clients.openWindow("/") // 알림 누르면 홈으로 이동
    );
  });
  