import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * Se estiver usando IOS com emulador: localhost
 * Se estiver usando IOS com fisico: IP da máquina
 * =======
 * Android com Emulador: Será necessário confiurar o reverse (adb reverse tcp:3000 tcp:3000), pois ele
 * mesmo se identifica como localhost
 * Android com emulador: 10.0.2.2 (Android studio)
 * Android com outro emuladro: 10.0.3.2 (Genymotion)
 * Android com fisico: IP da máquina
 */