import {environment} from '../../environments/environment';
export class AppConfig {
  //local server settings
  public static readonly apiUrl = (environment.production) ? '/api' : 'http://localhost:4000/api';

}
;
