import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faSmile } from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  library.add(faSmile, faEye, faEyeSlash);
};
