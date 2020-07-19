import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

const registerIcons = () => {
  library.add(
    faEnvelope,
    faKey,
  );
};

registerIcons();

export default registerIcons;
