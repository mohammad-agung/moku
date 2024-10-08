function notifKondisiUdara(teamName) {
    const title = 'Team Favorit';
    const options = {
        'body': `Berhasil menambahkan ${teamName}\nke dalam tim favorit`,
        'icon': `/logo-club.png`
    }
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('FItur notifikasi tidak diijinkan.');
    }
}