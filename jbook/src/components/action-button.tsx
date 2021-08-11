import { MouseEventHandler } from 'react';

/* todo: finish this
interface ActionButtonProps {
  className: string; 
  action
}
*/
const ActionButton = (className: string, action: any) => {
  return (
    <button className="button is-primary is-small" onClick={action}>
      <span className="icon">
        <i className={className}></i>
      </span>
    </button>
  );
};

export default ActionButton;
