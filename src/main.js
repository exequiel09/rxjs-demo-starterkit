import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

Observable.interval(1000)
    .take(4)
    .subscribe(data => console.log(data))
    ;


