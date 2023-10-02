import('./bootstrap')
	.catch(err => console.error(err));
import { Ion } from 'cesium';

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';	