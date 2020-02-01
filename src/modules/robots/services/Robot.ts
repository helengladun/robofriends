import axios from 'axios';

export class Robot {
  static getRobot() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
}
