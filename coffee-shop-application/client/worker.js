self.addEventListener('push', () => {
    self.registration.showNotification('Order is ready!!!');
  });