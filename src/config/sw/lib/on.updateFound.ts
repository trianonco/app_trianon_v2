export default (regSW: any) => {
    return new Promise((resolve, reject) => {
        const reg = regSW;
        const installingWorker = reg.installing;
        installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
                case 'installed':
                    if (navigator.serviceWorker.controller) {
                        // new update available
                        resolve(true);
                    } else {
                        // no update available
                        resolve(false);
                    }
                    break;
            }
        };
    });
};
