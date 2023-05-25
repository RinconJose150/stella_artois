window.loadDynamic = function (url, defer = false, async = true) {
    return new Promise(function (resolve, reject) {
        try {
            let nwScript = document.createElement('script');

            nwScript.type = 'text/javascript';
            nwScript.defer = defer;
            nwScript.async = async;
            nwScript.src = url;

            nwScript.addEventListener('load', () => {
                resolve({
                    loaded: true,
                    error: false
                });
            })

            nwScript.addEventListener('error', () => {
                resolve({
                    loaded: false,
                    error: true,
                    message: 'Fallo la carga del script: ' + url
                });
            })

            document.head.insertAdjacentElement('beforeend', nwScript);
        } catch (error) {
            reject(error);
        }
    })
}