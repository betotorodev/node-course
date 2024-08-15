// plugins 
import { v4 as uuidv4 } from 'uuid';

export const getUid = () => {
    return uuidv4();
}

// archivos donde se usan

const person = {
  id: getUid(),
  name: 'Fernando',
  age: 35
}