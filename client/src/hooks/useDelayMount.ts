import { VisibilityEnum } from 'utils/types/enums';
import { useState, useEffect } from 'react';

type TimeDelay = number;

const useDelayMount = (shouldRender: boolean, timeDelayMounting: TimeDelay, timeDelayUnmouting: TimeDelay) => {
  const [isRendered, setIsRender] = useState<VisibilityEnum>(VisibilityEnum.isHidden);

  useEffect(() => {
    const delayRendering = (timeDelay: TimeDelay, apearOption: VisibilityEnum) => setTimeout(() => setIsRender(apearOption), timeDelay);
    if (shouldRender) {
      delayRendering(timeDelayMounting, VisibilityEnum.isVisible);
    } else {
      delayRendering(timeDelayUnmouting, VisibilityEnum.isHidden);
    }
  }, [shouldRender, timeDelayMounting, timeDelayUnmouting]);

  return {
    isMounted: isRendered === VisibilityEnum.isVisible,
  };
};

export default useDelayMount;
